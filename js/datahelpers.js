// Some DataSets are massive and will bring any web browser to its knees if you
// try to load the entire thing. To keep your app performing optimally, take
// advantage of filtering, aggregations, and group by's to bring down just the
// data your app needs. Do not include all columns in your data mapping file,
// just the ones you need.
//
// For additional documentation on how you can query your data, please refer to
// https://developer.domo.com/docs/dev-studio/dev-studio-data

/**
 * parentType enum
 */
const parentTypes = {
    SINGLE: 1,
    PARENT: 2,
    PARENT_WITH_PARENT: 3
}

/**
 * Load the data from the relationships DataSet
 * @experimental This function currently loads all relationships into memory. 
 * This may not be feasible for large DataSets and so it will likely need to be
 * refactored to load data in chunks. Beware of breaking changes.
 * @param {Number} parentType - The type of parent to load (1, 2, or 3)
 * @returns [Object] - Array of objects representing the relationships
 */
async function loadData(parentType) {
  const endpoint = `/data/v2/relationships?filter=ParentType=${parentType}`;
  const count = (await domo.get(`${endpoint}&count=ParentType`))[0]
    .ParentType;

  let retrievedCount = 0;
  let promises = [];

  while (retrievedCount < count) {
    // If we're on the last page, get the remaining records
    if (count - retrievedCount < 100) {
      promises.push(
        domo.get(
          `${endpoint}&limit=${
            count - retrievedCount
          }&offset=${retrievedCount}`
        )
      );
    } else {
      promises.push(
        domo.get(`${endpoint}&limit=100&offset=${retrievedCount}`)
      );
    }
    retrievedCount += 100;
  }

  return (await Promise.all(promises)).flat();
}