

function parseData(createGraph){
    Papa.parse("krustykrab.json", {
        download: true,
        complete: function(results){
            createGraph(results.data);
        }
    });
    
}

function createGraph(data) {
    var KP = 0, KC = 0, KD = 0;
    var turtle_KP = 0, turtle_KC = 0, turtle_KD = 0;
    var salmon_KP = 0, salmon_KC = 0, salmon_KD = 0;
    var seahorse_KP = 0, seahorse_KC = 0, seahorse_KD = 0;
    var coral_KP = 0, coral_KC = 0, coral_KD = 0;
    var giantclam_KP = 0, giantclam_KC = 0, giantclam_KD = 0;
    var graywhale_KP = 0, graywhale_KC = 0, graywhale_KD = 0;
    var sealion_KP = 0, sealion_KC = 0, sealion_KD = 0;
    var turtle = 0, salmon = 0, seahorse = 0, coral = 0, giantclam = 0, graywhale = 0, sealion = 0;

    
    $.getJSON( "krustykrab.json", function( data2 ) {
        $.each(data2, function(key, value){
        
        // SPECIES COUNTER
        if(value.species == "leatherback turtle")
                turtle++;
            else if(value.species == "salmon")
                salmon++;
            else if(value.species == "seahorse")
                seahorse++;
            else if(value.species == "coral")
                coral++;
            else if(value.species == "giant clam")
                giantclam++;
            else if(value.species == "gray whale")
                graywhale++;
            else if(value.species == "sea lion")
                sealion++;
        
        // BURGER COUNTER + PER SPECIES SALES
        if(value.burger == "Krabby Pattie"){
             KP++;
            if(value.species == "leatherback turtle")
                turtle_KP++;
            else if(value.species == "salmon")
                salmon_KP++;
            else if(value.species == "seahorse")
                seahorse_KP++;
            else if(value.species == "coral")
                coral_KP++;
            else if(value.species == "giant clam")
                giantclam_KP++;
            else if(value.species == "gray whale")
                graywhale_KP++;
            else if(value.species == "sea lion")
                sealion_KP++;
        }
        else if(value.burger == "Krusty Combo"){
            KC++;
            if(value.species == "leatherback turtle")
                turtle_KC++;
            else if(value.species == "salmon")
                salmon_KC++;
            else if(value.species == "seahorse")
                seahorse_KC++;
            else if(value.species == "coral")
                coral_KC++;
            else if(value.species == "giant clam")
                giantclam_KC++;
            else if(value.species == "gray whale")
                graywhale_KC++;
            else if(value.species == "sea lion")
                sealion_KC++;
        }
        else if(value.burger == "Krusty Deluxe"){
            KD++;
            if(value.species == "leatherback turtle")
                turtle_KD++;
            else if(value.species == "salmon")
                salmon_KD++;
            else if(value.species == "seahorse")
                seahorse_KD++;
            else if(value.species == "coral")
                coral_KD++;
            else if(value.species == "giant clam")
                giantclam_KD++;
            else if(value.species == "gray whale")
                graywhale_KD++;
            else if(value.species == "sea lion")
                sealion_KD++;
        }
        });
        
        var chart = c3.generate({
    title: {
        show: true,
        text: 'TOP SELLING BURGER',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,KP],
            ['Krusty Combo',KC],
            ['Krusty Deluxe',KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#chart'
});
    
    var chart = c3.generate({

        title: {
        show: true,
        text: 'CUSTOMERS',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Turtle' ,turtle],
            ['Salmon',salmon],
            ['SeaHorse',seahorse],
            ['Coral' ,coral],
            ['Giant Clam',giantclam],
            ['Gray Whale',graywhale],
            ['Sea Lion' ,sealion]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#chart1'
});
    
        var chart = c3.generate({

        title: {
        show: true,
        text: 'LEATHERBACK TURTLE',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,turtle_KP],
            ['Krusty Combo',turtle_KC],
            ['Krusty Deluxe',turtle_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#turtle'
});

        var chart = c3.generate({

        title: {
        show: true,
        text: 'SALMON',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,salmon_KP],
            ['Krusty Combo',salmon_KC],
            ['Krusty Deluxe',salmon_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#salmon'
});
    
    var chart = c3.generate({

        title: {
        show: true,
        text: 'SEA HORSE',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,seahorse_KP],
            ['Krusty Combo',seahorse_KC],
            ['Krusty Deluxe',seahorse_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#seahorse'
});
        
        var chart = c3.generate({

        title: {
        show: true,
        text: 'CORAL',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,coral_KP],
            ['Krusty Combo',coral_KC],
            ['Krusty Deluxe',coral_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#coral'
});
        
        var chart = c3.generate({

        title: {
        show: true,
        text: 'GIANT CLAM',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,giantclam_KP],
            ['Krusty Combo',giantclam_KC],
            ['Krusty Deluxe',giantclam_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#giantclam'
});
        
        var chart = c3.generate({

        title: {
        show: true,
        text: 'GRAY WHALE',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,graywhale_KP],
            ['Krusty Combo',graywhale_KC],
            ['Krusty Deluxe',graywhale_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#graywhale'
});
        
        var chart = c3.generate({

        title: {
        show: true,
        text: 'SEALION',
        position: 'top-center',   // top-left, top-center and top-right
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
    data: {
        columns: [
            ['Krabby Pattie' ,sealion_KP],
            ['Krusty Combo',sealion_KC],
            ['Krusty Deluxe',sealion_KD]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '#sealion'
});

        
        
    });
    
    
    
    

    

}


    

parseData(createGraph);

        