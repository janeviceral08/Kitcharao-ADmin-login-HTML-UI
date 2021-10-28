(function(window, undefined) {
  var dictionary = {
    "e399d20c-d2a0-40e1-8430-6afc0d754a59": "Gallery",
    "56ca19a8-5935-4437-910b-87f97873e7d6": "Logs",
    "75763ac9-4c76-46fd-97d0-d4331ac6009b": "Awards",
    "2a550e8d-9b1c-45ce-92f7-027dfb99192d": "Users",
    "95f619d7-6639-4b64-8555-87f2a4693d4b": "Bids",
    "5a41e5d4-3bfa-4f5e-ba96-fb47439e60f3": "News",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "fc885e94-48d7-415b-b96d-dff03a30d7fa": "Edit Pages",
    "d4f5c191-332d-4c4d-958c-af506c9fd4a4": "Settings",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);