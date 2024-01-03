<div align="center">
<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</p>
<p align="center">
    <h1 align="center">.</h1>
</p>
<p align="center">
    <em>► INSERT-TEXT-HERE</em>
</p>
<p align="center">
    <em>Developed with the software and tools below</em>
</p>
<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">

</p>
</div>
<hr>

##  Quick Links
- [ Quick Links](#-quick-links)
- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#modules)
- [ Getting Started](#-getting-started)
    - [ Installation](#-installation)
    - [ Running .](#-running-.)
    - [ Tests](#-tests)
- [ Roadmap](#-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

This project is a Domo app that allows users to visualize
The relationships between dataflows and their parents and children.

---

##  Features

Expandable tree table that shows the relationships between dataflows and their parents and children.

---

##  Repository Structure

```sh
└── ./
    ├── bower_components/
    │   ├── jquery/
    │   │   ├── .bower.json
    │   │   ├── AUTHORS.txt
    │   │   ├── LICENSE.txt
    │   │   ├── bower.json
    │   │   └── src/
    │   └── jquery-treetable/
    │       ├── .bower.json
    │       ├── GPL-LICENSE.txt
    │       ├── MIT-LICENSE.txt
    │       ├── bower.json
    │       ├── css/
    │       ├── jquery.treetable.js
    │       └── treetable.jquery.json
    ├── components/
    │   ├── autocomplete.js
    │   ├── floatingactionbutton.js
    │   ├── modal.js
    │   ├── router.js
    │   └── table.js
    ├── index.html
    ├── js/
    │   ├── app.js
    │   ├── data.js
    │   ├── datahelpers.js
    │   ├── domo.js
    │   ├── domoPhoenixWithMaps.js
    │   ├── helpers.js
    │   └── home.js
    ├── manifest.json
    ├── styles/
    │   └── app.css
    └── views/
        ├── data.html
        ├── home.html
        └── md/
            └── home.html

```

---

##  Modules

<details closed><summary>.</summary>

| File                           | Summary                         |
| ---                            | ---                             |
| [manifest.json](manifest.json) | ► The manifest required for the Domo app. Specifies a name and a dataset alias. |
| [index.html](index.html)       | ► The main entry point for the application |

</details>

<details closed><summary>bower_components.jquery-treetable</summary>

Source and minified distribution files for the jQuery TreeTable plugin.
</details>



<details closed><summary>js</summary>

| File                                                | Summary                         |
| ---                                                 | ---                             |
| [datahelpers.js](js/datahelpers.js)                 | ► Functions for querying data from the datset |
| [app.js](js/app.js)                                 | ► Initializes the application and routes. Modify this file to add additional routes. |
| [domo.js](js/domo.js)                               | ► Minified domo secret sauce. |
| [data.js](js/data.js)                               | ► Javascript automatically executed when the data route is loaded. Responsible for querying the data and building the table. |
| [domoPhoenixWithMaps.js](js/domoPhoenixWithMaps.js) | ► More domo special sauce. |
| [helpers.js](js/helpers.js)                         | ► A collection of helpers provided by domo with the Sugar Run template. |
| [home.js](js/home.js)                               | ► Javascript automatically executed when the home route is loaded. Presently this file is empty. |

</details>

<details closed><summary>components</summary>

| File                                                          | Summary                         |
| ---                                                           | ---                             |
| [table.js](components/table.js)                               | ► Domo provided table component, not currently in use. |
| [autocomplete.js](components/autocomplete.js)                 | ► Domo provided autocomplete component not currently in use. |
| [router.js](components/router.js)                             | ► Router logic. Do not modify unless you know you have a good reason. |
| [modal.js](components/modal.js)                               | ► Domo provided modal component, not currently in use.  |
| [floatingactionbutton.js](components/floatingactionbutton.js) | ► Domo provided button component, not currently in use. |

</details>

<details closed><summary>views</summary>

| File                         | Summary                         |
| ---                          | ---                             |
| [home.html](views/home.html) | ► The home view provides the documentation for running the application. It is loaded by default. To change the default view, modify app.js |
| [data.html](views/data.html) | ► The data view generates a spinner while the javascript is being executed. Other than that it is nothing more than a place holder for the table to be rendered to. |

</details>

<details closed><summary>styles</summary>

| File                      | Summary                         |
| ---                       | ---                             |
| [app.css](styles/app.css) | ► Global styles |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* Node.js (LTS)
* npm (LTS)
* Git
* Domo Developer Environment (Follow steps 1 and 2 of the [Setup and Installation Guide](https://developer.domo.com/portal/6hlzv1hinkq19-setup-and-installation)) from the Domo Developer Portal.

###  Installation

1. Clone the . repository:
```sh
git clone git@github.com:richbai90/hierarchy.git
```

2. Change to the project directory:
```sh
cd ./hierarchy
```

###  Running .
Use the following command to run .:
```sh
domo dev
```

###  Tests
Todo: Add tests

---

##  Project Roadmap

- [ ] `► Add Tests`
- [ ] `► Visualize dataset relationships`
- [ ] `► Handle recursive relationships`

---

##  Contributing

This project is not maintained by the Domo team and is readonly. If you would like to contribute, please fork the repository and publish a new app to the Domo Appstore. 

</details>

---

##  License

This project is protected under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/agpl-3.0/) file.

---

##  Acknowledgments

- Robert Baird
- Domo Team

[**Return**](#-quick-links)

---
