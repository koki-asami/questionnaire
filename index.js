Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "elements": [
        {
            "type": "imagepicker-multiple",
            "name": "choosepicture",
            // "title": "以下の画像100枚のうち50枚は本物で50枚は合成画像です。合成画像であると思う50枚を選択してください",
            "validators": [
                {
                    type: "answercount",
                    text: "You should select 15 images",
                    minCount: 15,
                    maxCount: 1
                }
            ],
            "choicesOrder": "random",
            "imageFit": "cover",
            "choices": [
                {"value": "433.png-0", "imageLink": "./assets/imgs/433.png"
            }, {
                "value": "7_.png-1", "imageLink": "./assets/imgs/7_.png"
            }, {
                "value": "50_.png-1", "imageLink": "./assets/imgs/50_.png"
            }, {
                "value": "186_.png-1", "imageLink": "./assets/imgs/186_.png"
            }, {
                "value": "223.png-0", "imageLink": "./assets/imgs/223.png"
            }, {
                "value": "26_.png-1", "imageLink": "./assets/imgs/26_.png"
            }, {
                "value": "308.png-0", "imageLink": "./assets/imgs/308.png"
            }, {
                "value": "181.png-0", "imageLink": "./assets/imgs/181.png"
            }, {
                "value": "72.png-0", "imageLink": "./assets/imgs/72.png"
            }, {
                "value": "203_.png-1", "imageLink": "./assets/imgs/203_.png"
            }, {
                "value": "43_.png-1", "imageLink": "./assets/imgs/43_.png"
            }, {
                "value": "39_.png-1", "imageLink": "./assets/imgs/39_.png"
            }, {
                "value": "171_.png-1", "imageLink": "./assets/imgs/171_.png"
            }, {
                "value": "78.png-0", "imageLink": "./assets/imgs/78.png"
            }, {
                "value": "520.png-0", "imageLink": "./assets/imgs/520.png"
            }, {
                "value": "369.png-0", "imageLink": "./assets/imgs/369.png"
            }, {
                "value": "366.png-0", "imageLink": "./assets/imgs/366.png"
            }, {
                "value": "38_.png-1", "imageLink": "./assets/imgs/38_.png"
            }, {
                "value": "116_.png-1", "imageLink": "./assets/imgs/116_.png"
            }, {
                "value": "40_.png-1", "imageLink": "./assets/imgs/40_.png"
            }, {
                "value": "462.png-0", "imageLink": "./assets/imgs/462.png"
            }, {
                "value": "57_.png-1", "imageLink": "./assets/imgs/57_.png"
            }, {
                "value": "164_.png-1", "imageLink": "./assets/imgs/164_.png"
            }, {
                "value": "33_.png-1", "imageLink": "./assets/imgs/33_.png"
            }, {
                "value": "179_.png-1", "imageLink": "./assets/imgs/179_.png"
            }, {
                "value": "508.png-0", "imageLink": "./assets/imgs/508.png"
            }, {
                "value": "208.png-0", "imageLink": "./assets/imgs/208.png"
            }, {
                "value": "469.png-0", "imageLink": "./assets/imgs/469.png"
            }, {
                "value": "125.png-0", "imageLink": "./assets/imgs/125.png"
            }, {
                "value": "25.png-0", "imageLink": "./assets/imgs/25.png"
            },
            ]
        }
    ]
};


window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            // .innerHTML = "result: " + JSON.stringify(result.data);
            var button = document.getElementById( 'button' );
            button.addEventListener( 'click', function() {
                var blob = new Blob( [ JSON.stringify(result.data) ], {
                    type: 'application/octet-stream'
                });
                
                url = URL.createObjectURL( blob );
                var link = document.createElement( 'a' );
                link.setAttribute( 'href', url );
                link.setAttribute( 'download', 'example.json' );
                
                var event = document.createEvent( 'MouseEvents' );
                event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                link.dispatchEvent( event );
            });
    },);

// survey
//     .onValueChanged
//     .add(function (survey, options) {
//         if(options.name !== "know") return;
//         knownChoices = options.question.choices;
//         var choices = [];
//         for(var i = 0; i < knownChoices.length; i ++) {
//             var item = knownChoices[i];
//             // the item is not selected
//             if(options.value.indexOf(item.value) < 0) {
//                 choices.push(item);
//             }
//         }
//         var learnQuestion = survey.getQuestionByName("choosepicture");
//         learnQuestion.choices = choices;
//         learnQuestion.visible = choices.length > 0;
//         document.getElementById("myText").innerHTML = "result: " + choices;
//         console.log(choices);
//     });
    console.log(count);
$("#surveyElement").Survey({model: survey});
