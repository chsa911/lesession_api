const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
{
     eindat: {
           type: Date,
           required: true,

         },

     autor: {
      type: String,
      required: false,

    },

    keyword: {
      type: String,
      required: true,

    },

    kwp: {
      type: Number,
      required: true,
    },

      verlag: {
        type: String,
        required: true,
      },

      seiten: {
        type: Number,
        required: true,
      },

//Teil: Lesehistorie

    //Entdeckungsdatum

      entdat: {
              type: Date,
              required: false,
             },

    //Datum der Veröffentlichung auf der Homepage

      verdat: {
        type: Date,
        required: false,
      },

   // Datum zu dem das Buch beendet wurde

      enddat: {
        type: Date,
        required: false,
      },
// Wie oft wurde das Buch gelesen 0= erstes mal 1= 2. mal

      leseversuche: {
        type: Number,
        required: false,
      },
    //Teil: Content

       //Genre
//F= Fiktion, N=Nonfiktion
      genre: {
                type: String,
                required: false,
                             },

       gengenau: {
                  type: String,
                  required: false,
                               },
    //Handlungsort:
    // 0-9
       kontinent: {
                    type: Number,
                    required: false,

                  },

         land: {
                        type: String,
                        required: false,
                      },
         thema0: {
                         type: String,
                         required: false,

                              },
         thema1: {
                         type: String,
                         required: false,
                                       },
        thema2: {
                                               type: String,
                                               required: false,
                                             },
         hauptperson0: {
                            type: String,
                            required: false,
                                          },
           hauptperson1: {
                                                  type: String,
                                                  required: false,
                                                },
   zeit: {
                                               type: String,
                                               required: false,

                                             },
    // Amazon Link
    amalin: {
                                               type: String,
                                               required: false,
    },
  // Position der Markierung: oben, unten, rechts, links
    position: {
                                               type: String,
                                               required: false,
                                                                                            },
    //Teil Markierungen
    mark: {
                                                   type: String,
                                                   required: false,

                                                 },
    markrang: {
                                                   type: String,
                                                   required: false,

    },
                                                   //Topwert                                              },
   topw: {
                                                   type: Number,
                                                   required: false,

                                                 },
    //Belegte Bereiche
    belber: {
                                                   type: Number,
                                                   required: false,

                                                 },
    //Gesamtwert
    gesw: {
                                                   type: Number,
                                                   required: false,

                                                 },
    //Markierung: x= verfügbar, v=vorzeitig beendet, w= wunsch
    zustand: {
                                                   type: String,
                                                   required: false,

                                                 },
},
{
  timestamps: true,
}
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;