// get the singles

// avoid polluting the global namespace
(function () {
  /**
   * Load the data from the relationships DataSet
   * See the manifest for the DataSet ID
   * @returns [Object] - Array of objects representing the relationships
   */
  async function loadDatasets() {
    // load the data asynchonously
    const promises = [
      loadData(parentTypes.SINGLE),
      loadData(parentTypes.PARENT_WITH_PARENT),
      loadData(parentTypes.PARENT),
    ];
    return (await Promise.all(promises)).flat();
  }

  /**
   * Remove the loader from the DOM
   */
  function removeLoader() {
    $(".lds-ring").remove();
  }

  /**
   * Build a map of parent IDs to children IDs
   * @param {*} dataset The dataset to build the children map from
   * @returns An object mapping parent IDs to children IDs
   */
  function buildChildrenMap(dataset) {
    let childrenMap = {};

    dataset.forEach((item) => {
      // if the item has a parent, add it to the children map
      if (item.ParentDF !== 0) {
        // if the parent is not in the children map, add it
        if (!childrenMap[item.ParentDF]) {
          childrenMap[item.ParentDF] = [];
        }
        // add the child to the parent's children
        childrenMap[item.ParentDF].push(item.DF);
      }
    });

    return childrenMap;
  }

  /**
   * Build the hierarchy from the dataset
   * @param {*} dataset The dataset to build the hierarchy from
   * @returns An object representing the hierarchy of the format {id: {id: number, children: []}}
   */
  function buildHierarchy(dataset) {
    let childrenMap = buildChildrenMap(dataset);
    // create empty hierarchy object
    let hierarchy = {};
    dataset.forEach((item) => {
      // if the item has no parent, it is a root node
      if (!item.ParentDF) {
        hierarchy[item.DF] = {
          id: item.DF,
          children: buildChildren(childrenMap, item.DF),
        };
        // if the item has a parent and the parent is already in the dataset, add it to the parent's children
      } else if (hierarchy[item.ParentDF]) {
        hierarchy[item.ParentDF].children.push({
          id: item.DF,
          children: buildChildren(childrenMap, item.DF),
        });
        // if the item has a parent and the parent is not in the dataset, add it to the hierarchy
      } else {
        // the parent is not in the dataset, so we need to add it
        hierarchy[item.ParentDF] = {
          id: item.ParentDF,
          children: [
            {
              id: item.DF,
              children: buildChildren(childrenMap, item.DF),
            },
          ],
        };
      }
    });
    return hierarchy;
  }

  /**
   * Recursively build the children of a parent
   * @param {*} childrenMap The children map
   * @param {*} parentId The parent ID
   * @returns An array of children objects
   */
  function buildChildren(childrenMap, parentId) {
    let childrenIds = childrenMap[parentId] || [];
    // if there are no children, return an empty array (base case)
    if (!childrenIds.length) {
      return [];
    }
    return childrenIds.map((childId) => ({
      id: childId,
      children: buildChildren(childrenMap, childId),
    }));
  }

  /**
   * Create the tree table HTML
   * @param {*} hierarchy The hierarchy object
   * @returns The tree table HTML
   * @see https://ludo.cubicphuse.nl/jquery-treetable/#usage
   * @see https://ludo.cubicphuse.nl/jquery-treetable/#markup
   * @see https://ludo.cubicphuse.nl/jquery-treetable/#data-attributes
   */

  function createTreeTable(hierarchy) {
    let html =
      "<table><thead><tr><th>Id</th></tr></thead><tbody>";

    function traverse(node, parentId) {
      let rowId = parentId ? `${parentId}-${node.id}` : `${node.id}`;
      html += `<tr data-tt-id="${rowId}" ${
        parentId ? `data-tt-parent-id="${parentId}"` : ""
      }><td>${node.id}</td></tr>`;
      node.children.forEach((child) => traverse(child, rowId));
    }

    Object.values(hierarchy).forEach((root) => traverse(root));
    html += "</tbody></table>";

    return html;
  }

  // load the data and build the hierarchy
  loadDatasets().then((data) => {
    const hierarchy = buildHierarchy(data);
    removeLoader();
    let treeTableHtml = createTreeTable(hierarchy);
    $("main").append(treeTableHtml);
    $("table").treetable({ expandable: true });
  });
})();
