jQuery("#simulation")
  .on("click", ".s-95f619d7-6639-4b64-8555-87f2a4693d4b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_23" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_53" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_23" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_50" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_53" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_59" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/dashboard.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/dashboard.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/dashboard.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/news.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/news.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/news.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/awards.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/awards.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/awards.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/bids.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/bids.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/bids.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/gallery.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/gallery.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/gallery.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/editpages.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/editpages.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/editpages.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/email.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/email.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/email.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/users.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/users.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://127.0.0.1/admin/adminpage/users.php"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d4f5c191-332d-4c4d-958c-af506c9fd4a4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d4f5c191-332d-4c4d-958c-af506c9fd4a4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d4f5c191-332d-4c4d-958c-af506c9fd4a4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_21" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_21" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_21" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_21" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeOutQuad",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-95f619d7-6639-4b64-8555-87f2a4693d4b .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_8" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_9" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_10" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 2.5px #80BDFF)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80BDFF",
                        "border-right-color": "#80BDFF",
                        "border-bottom-color": "#80BDFF",
                        "border-left-color": "#80BDFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_11" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-95f619d7-6639-4b64-8555-87f2a4693d4b .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  },"^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DC3545",
                        "border-right-color": "#DC3545",
                        "border-bottom-color": "#DC3545",
                        "border-left-color": "#DC3545"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_8 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_9",
                    "property": "jimGetValue"
                  },"^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DC3545",
                        "border-right-color": "#DC3545",
                        "border-bottom-color": "#DC3545",
                        "border-left-color": "#DC3545"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_9 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_10",
                    "property": "jimGetValue"
                  },"^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DC3545",
                        "border-right-color": "#DC3545",
                        "border-bottom-color": "#DC3545",
                        "border-left-color": "#DC3545"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_10 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#DC3545",
                        "border-right-color": "#DC3545",
                        "border-bottom-color": "#DC3545",
                        "border-left-color": "#DC3545"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-95f619d7-6639-4b64-8555-87f2a4693d4b #s-Input_11 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#CED4DA",
                        "border-right-color": "#CED4DA",
                        "border-bottom-color": "#CED4DA",
                        "border-left-color": "#CED4DA"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });