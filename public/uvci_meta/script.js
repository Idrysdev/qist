(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist,this.mainPlayList])",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "verticalAlign": "top",
 "layout": "absolute",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C3D9CF4D_CD9E_5495_41AD_11E471650A88",
  "this.overlay_C1B5F228_CD97_AC9C_41D8_E28BC70B0CFA"
 ],
 "hfovMin": "150%",
 "label": "POLYVALENTE",
 "id": "panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11"
  }
 ],
 "overlays": [
  "this.overlay_C2A13B12_CD97_BC8F_41DD_4D09873FD0F5"
 ],
 "hfovMin": "150%",
 "label": "INCUBATEUR",
 "id": "panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6"
  }
 ],
 "overlays": [
  "this.overlay_C1B589EC_CDAD_DF9B_41BC_C367FDC4302B",
  "this.overlay_C23655BA_CDB3_B7FF_41B9_55A4A2C4FC83",
  "this.overlay_C2FCFF90_CDB6_D38C_41E1_DBF0F436C075"
 ],
 "hfovMin": "150%",
 "label": "AULA",
 "id": "panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6"
  }
 ],
 "overlays": [
  "this.overlay_C39D7179_CDBF_EF7C_41D9_D6748A207C57",
  "this.overlay_C34F5304_CDBE_AC8B_41DC_0F7C0E4E13E7",
  "this.overlay_EDA4AFAC_CAFE_7394_41DA_562715D1BB46"
 ],
 "hfovMin": "150%",
 "label": "DG",
 "id": "panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FCB565FB_F24E_7CCA_41EA_9E5140D483B7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.76,
  "pitch": -20.2
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_camera",
   "media": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_camera",
   "media": "this.panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_camera",
   "media": "this.panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_camera",
   "media": "this.panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_camera",
   "media": "this.panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_camera",
   "media": "this.panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_camera",
   "media": "this.panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_camera",
   "media": "this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_camera",
   "media": "this.panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_camera",
   "media": "this.panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_camera",
   "media": "this.panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_camera",
   "media": "this.panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_camera",
   "media": "this.panorama_C2E5464F_CD93_D495_41DD_9896A2853E38",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_D8E83FA2_CBAD_B38C_41E3_D7DDC5F5D7D7",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "BIENVENUE A L'UVCI",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 0.86,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "3vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_D8EA7FAE_CBAD_B394_41E2_FCC655EA3550"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window29484"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C2E5464F_CD93_D495_41DD_9896A2853E38"
  }
 ],
 "overlays": [
  "this.overlay_C2968F7A_CD96_D37F_41D6_70E023C33020"
 ],
 "hfovMin": "150%",
 "label": "INCUBATEUR",
 "id": "panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_EDFE348A_CAF2_559F_41E1_A7BCCDD72490",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "SALLE DE REUNION",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EDFC448B_CAF2_559D_41E3_870358668C57"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window46283"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_EC81433E_CAEE_ACF4_41D1_A11FC848FF7A",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "BIENVENUE DANS LA SALLE AULA",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EC83B340_CAEE_AC8C_41E6_BD215EB3FAD7"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window38200"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E"
  }
 ],
 "overlays": [
  "this.overlay_C39EDEC0_CD96_758B_41DA_D66F2E19DD9C",
  "this.overlay_C2DDEA89_CD92_FD9C_4176_48CA7B24847B"
 ],
 "hfovMin": "150%",
 "label": "COMMUNAUTE",
 "id": "panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD7C07EC_F24E_7CCD_41C2_94BA1D4957B7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": -3.67
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD431641_F24E_7F37_41DF_5241BE6CD826",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.86,
  "pitch": -20.2
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25"
  }
 ],
 "overlays": [
  "this.overlay_C20D90C7_CDAD_ED95_41CB_E57DA60F3E7F",
  "this.overlay_C23F0B30_CDAF_BC8B_41C4_1912933EDED3",
  "this.overlay_C2D5A896_CDAE_5DB7_41E6_2AB3A443D0CA"
 ],
 "hfovMin": "150%",
 "label": "AULA",
 "id": "panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_t.jpg"
},
{
 "shadowBlurRadius": 6,
 "id": "window_EC21EF15_CAEE_D4B5_41E3_2514BAE5C472",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "SALLE INCUBATEUR",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EC23BF17_CAEE_D4B5_41DE_17AA2CDA2323"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window48683"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_ECB511C1_CAF6_EF93_41E8_FB7F0106C044",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "SALLE DE CONFERENCE DU DG",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_ECB7D1D2_CAF6_EF8C_4181_32F059DE6C43"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window45443"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD5D3718_F24E_7D55_41C3_1638754DE9FD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.84,
  "pitch": -9.18
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E"
  }
 ],
 "overlays": [
  "this.overlay_C2FBA121_CD92_6C8D_41B5_B208173BB8CB",
  "this.overlay_C32EE5A5_CD92_5794_41C7_613AB4FFE10B"
 ],
 "hfovMin": "150%",
 "label": "INCUBATEUR",
 "id": "panorama_C2E5464F_CD93_D495_41DD_9896A2853E38",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD5736D1_F24E_7CD7_41C5_A7D1666527FC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.76,
  "pitch": -8.27
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_EE6F6706_CAF2_D497_41E8_871E42DC6E2A",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "BIENVENUE DANS LA SALLE DES DOCTEURS",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EE6D6708_CAF2_D49B_41A3_2C76BD96ECED"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window39048"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "shadowBlurRadius": 6,
 "id": "window_D25DBC31_CB72_B48D_41AC_A2AAB0496B48",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "BIENVENUE A LA SCOLARITE",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "3vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_D25BFC32_CB72_B48F_41C6_3034190FACEE"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "bold",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 1,
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "footerBorderColor": "#000000",
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat SemiBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window33526"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2D472A1_CDB6_6D8C_41E6_3E70F90BE1C5"
 ],
 "hfovMin": "150%",
 "label": "PROF",
 "id": "panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_t.jpg"
},
{
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8759E93_CBB2_D58D_41BC_4C19DF97311C"
 ],
 "hfovMin": "150%",
 "label": "UVCI",
 "id": "panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_t.jpg"
},
{
 "shadowBlurRadius": 6,
 "id": "window_EFC971DA_CA93_EFBF_41E2_2E5C117DBB12",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "BIENVENUE DANS LA SALLE POLYVALENTE",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EFCF01DB_CA93_EFBD_41E7_AA938BE0A5ED"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window35235"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_EDA498B9_CAF2_5DFD_41E9_C9B6E772C309",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "SECRETAIRE DU DG",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EDA228C8_CAF2_5D9B_41E7_769574049E70"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window40791"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FCB2D5B2_F24E_7D55_41E1_ECB75D1815E5",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.76,
  "pitch": -10.1
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_EEAD9F1F_CAFD_B4B5_41CD_7A954A8C1F4E",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "shadow": true,
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "titleTextDecoration": "none",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "title": "BUREAU DU DG",
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "minWidth": 20,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBackgroundOpacity": 1,
 "height": 600,
 "titlePaddingRight": 5,
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#660066",
 "backgroundColor": [],
 "shadowSpread": 1,
 "titleFontSize": "2vmin",
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.htmlText_EEA35F21_CAFD_B48D_41E9_1BF3433309B0"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "class": "Window",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "minHeight": 20,
 "horizontalAlign": "center",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Montserrat ExtraBold",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window43180"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E"
  }
 ],
 "overlays": [
  "this.overlay_C2EC9C7A_CDB5_D57F_41E8_3F4FEA80B62B",
  "this.overlay_C2F941AB_CDB2_6F9D_41E4_8B13637B7293",
  "this.overlay_C35BB823_CDB2_DC8D_41DD_213C7D6B6C4A",
  "this.overlay_C2981F87_CDAD_B395_41D3_6939CC32A0A7",
  "this.overlay_C2AFFAC9_CDAE_5D9D_41E5_D8730BEDCDEB",
  "this.overlay_C2C4A4E0_CDAE_758C_41DC_9D8951860C88"
 ],
 "hfovMin": "150%",
 "label": "CONFERENCE",
 "id": "panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD6BE75F_F24E_7DCB_41CA_71476DA26312",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.2,
  "pitch": -3.67
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist",
 "items": [
  {
   "camera": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_camera",
   "media": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_camera",
   "media": "this.panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_camera",
   "media": "this.panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_camera",
   "media": "this.panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_camera",
   "media": "this.panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_camera",
   "media": "this.panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_camera",
   "media": "this.panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_camera",
   "media": "this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_camera",
   "media": "this.panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_camera",
   "media": "this.panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_camera",
   "media": "this.panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_camera",
   "media": "this.panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_camera",
   "media": "this.panorama_C2E5464F_CD93_D495_41DD_9896A2853E38",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist, 12, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD7657A6_F24E_7D7D_41CE_148D6AF5AC92",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.35,
  "pitch": -16.53
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "partial": false,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2C0D519_CD92_54BC_41C6_66AC47B8302E"
 ],
 "hfovMin": "150%",
 "label": "REUNION",
 "id": "panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_t.jpg"
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E"
  }
 ],
 "overlays": [
  "this.overlay_C2029945_CDB2_FC94_41C8_F5F6B5C983FC",
  "this.overlay_C2FC4F87_CDB2_7394_41D2_FAB5AB414AAD",
  "this.overlay_C2BF3535_CDB2_74F4_41B9_395371997F5C"
 ],
 "hfovMin": "150%",
 "label": "SECRETAIRE",
 "id": "panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6",
 "pitch": 0,
 "vfov": 180,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_FD49168A_F24E_7F35_41DD_D8BC09B91216",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.76,
  "pitch": -10.1
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "toolTipPaddingRight": 6,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "shadow": false,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "transitionDuration": 500,
 "transitionMode": "blending",
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "minHeight": 50,
 "displayTooltipInTouchScreens": true,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "id": "ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647",
 "itemLabelFontColor": "#CCCCCC",
 "width": "13.496%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "right": "0.03%",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "shadow": false,
 "itemLabelGap": 9,
 "itemThumbnailWidth": 75,
 "borderSize": 0,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  0.2
 ],
 "itemPaddingBottom": 3,
 "selectedItemLabelFontColor": "#6600CC",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#FFFFFF",
 "itemLabelFontStyle": "normal",
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "gap": 10,
 "paddingRight": 20,
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Arial",
 "height": "78.39%",
 "playList": "this.ThumbnailList_E98123EC_CA9E_5394_41C5_DB7332161647_playlist",
 "itemThumbnailShadowVerticalLength": 3,
 "minWidth": 20,
 "paddingTop": 10,
 "itemThumbnailShadowOpacity": 0.54,
 "itemHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.71,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "layout": "vertical",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "class": "ThumbnailList",
 "rollOverItemLabelFontWeight": "normal",
 "bottom": "10.58%",
 "itemThumbnailOpacity": 1,
 "minHeight": 20,
 "rollOverItemBackgroundOpacity": 0,
 "itemPaddingRight": 3,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "paddingLeft": 20,
 "itemThumbnailHeight": 75,
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "itemLabelFontWeight": "bold",
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -16.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_1_HS_0_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 50
     }
    ]
   },
   "pitch": -2.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.46
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.83,
   "hfov": 6.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_1_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.22
  }
 ],
 "id": "overlay_C3D9CF4D_CD9E_5495_41AD_11E471650A88",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EFC971DA_CA93_EFBF_41E2_2E5C117DBB12, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_1_HS_1_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "pitch": -5.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.79,
   "hfov": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110942F_CBF5_F495_41E3_6BECD9DBAB71_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -5.48
  }
 ],
 "id": "overlay_C1B5F228_CD97_AC9C_41D8_E28BC70B0CFA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11, this.camera_FCB565FB_F24E_7CCA_41EA_9E5140D483B7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D600798A_CB92_5F9C_41D8_E75F0AC3F931",
   "yaw": -7.88,
   "pitch": -44.33,
   "distance": 100,
   "hfov": 20.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.88,
   "hfov": 20.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.33
  }
 ],
 "id": "overlay_C2A13B12_CD97_BC8F_41DD_4D09873FD0F5",
 "data": {
  "label": "Arrow 05"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -87.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_1_HS_0_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ]
   },
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.15,
   "hfov": 9.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.56
  }
 ],
 "id": "overlay_C1B589EC_CDAD_DF9B_41BC_C367FDC4302B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDE1DAC8_CD72_BD9C_41E0_75D75E4409AA",
   "yaw": -0.46,
   "pitch": -26.38,
   "distance": 100,
   "hfov": 16.98
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.46,
   "hfov": 16.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.38
  }
 ],
 "id": "overlay_C23655BA_CDB3_B7FF_41B9_55A4A2C4FC83",
 "data": {
  "label": "Arrow 05"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EC81433E_CAEE_ACF4_41D1_A11FC848FF7A, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -66.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_1_HS_2_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -13.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.06,
   "hfov": 15.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.39
  }
 ],
 "id": "overlay_C2FCFF90_CDB6_D38C_41E1_DBF0F436C075",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6, this.camera_FD5D3718_F24E_7D55_41C3_1638754DE9FD); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -43.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_1_HS_0_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 131
     }
    ]
   },
   "pitch": -10.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.96
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.27,
   "hfov": 9.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -10.26
  }
 ],
 "id": "overlay_C39D7179_CDBF_EF7C_41D9_D6748A207C57",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4, this.camera_FD5736D1_F24E_7CD7_41C5_A7D1666527FC); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -115.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_1_HS_1_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -23.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.48,
   "hfov": 13.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.51
  }
 ],
 "id": "overlay_C34F5304_CDBE_AC8B_41DC_0F7C0E4E13E7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EEAD9F1F_CAFD_B4B5_41CD_7A954A8C1F4E, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E572B0F3_CA92_AD8C_41E1_4C1F5E4E9478",
   "yaw": 12.48,
   "pitch": -33.41,
   "distance": 100,
   "hfov": 9.99
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.48,
   "hfov": 9.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.41
  }
 ],
 "id": "overlay_EDA4AFAC_CAFE_7394_41DA_562715D1BB46",
 "data": {
  "label": "Info Red 05"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_D8EA7FAE_CBAD_B394_41E2_FCC655EA3550",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;font-family:'Montserrat';\">Vous pouvez visiter le site internet de l'Universit\u00e9 Virtuelle de Cote d'Ivoire</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://uvci.edu.ci\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"font-size:17px;font-family:'Montserrat';\"><B><U>uvci.edu.ci</U></B></SPAN></A></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText29485"
 },
 "height": "100%"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C2E5464F_CD93_D495_41DD_9896A2853E38, this.camera_FD6BE75F_F24E_7DCB_41CA_71476DA26312); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDFCFAD4_CD72_BD8B_41E7_613CCCEAA4A3",
   "yaw": -1.92,
   "pitch": -23.99,
   "distance": 100,
   "hfov": 28.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.92,
   "hfov": 28.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.99
  }
 ],
 "id": "overlay_C2968F7A_CD96_D37F_41D6_70E023C33020",
 "data": {
  "label": "Arrow 05"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_EDFC448B_CAF2_559D_41E3_870358668C57",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>REUNION ENTRE LES PERSONNALITES DE L'UNIVERSITE.</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText46284"
 },
 "height": "100%"
},
{
 "id": "htmlText_EC83B340_CAEE_AC8C_41E6_BD215EB3FAD7",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>EVENEMENTS</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>COMPETITIONS</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText38201"
 },
 "height": "100%"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_D25DBC31_CB72_B48D_41AC_A2AAB0496B48, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0_HS_0_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -3.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.75,
   "hfov": 6.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.75
  }
 ],
 "id": "overlay_C39EDEC0_CD96_758B_41DA_D66F2E19DD9C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E, this.camera_FD49168A_F24E_7F35_41DD_D8BC09B91216); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -81.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_1_HS_1_0.png",
      "width": 182,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ]
   },
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.99,
   "hfov": 16.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117E3D7_CBF2_F3B5_41E6_F19108D2143E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -10.73
  }
 ],
 "id": "overlay_C2DDEA89_CD92_FD9C_4176_48CA7B24847B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25, this.camera_FD431641_F24E_7F37_41DF_5241BE6CD826); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDE0FAC4_CD72_BD8B_41D4_048E9E5C55B8",
   "yaw": 3.42,
   "pitch": -31.44,
   "distance": 100,
   "hfov": 19.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.42,
   "hfov": 19.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.44
  }
 ],
 "id": "overlay_C20D90C7_CDAD_ED95_41CB_E57DA60F3E7F",
 "data": {
  "label": "Arrow 05"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -22.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_1_HS_1_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": -1.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.7,
   "hfov": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_1_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.13
  }
 ],
 "id": "overlay_C23F0B30_CDAF_BC8B_41C4_1912933EDED3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 24.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_1_HS_2_0.png",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 35
     }
    ]
   },
   "pitch": -0.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.66,
   "hfov": 5.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_1_HS_2_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.5
  }
 ],
 "id": "overlay_C2D5A896_CDAE_5DB7_41E6_2AB3A443D0CA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_EC23BF17_CAEE_D4B5_41DE_17AA2CDA2323",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>ACCOMPAGNEMENT PROJET START-UP.</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>Etc...</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText48684"
 },
 "height": "100%"
},
{
 "id": "htmlText_ECB7D1D2_CAF6_EF8C_4181_32F059DE6C43",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>RENCONTRE POUR PARLER D'AFFAIRES.</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText45444"
 },
 "height": "100%"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EC21EF15_CAEE_D4B5_41E3_2514BAE5C472, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDFC2AD5_CD72_BDB5_41CB_47D9A57E3265",
   "yaw": 23.21,
   "pitch": -27.62,
   "distance": 100,
   "hfov": 21.9
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.21,
   "hfov": 21.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.62
  }
 ],
 "id": "overlay_C2FBA121_CD92_6C8D_41B5_B208173BB8CB",
 "data": {
  "label": "Info Red 02"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -44.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_1_HS_1_0.png",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -2.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.95,
   "hfov": 12.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.64
  }
 ],
 "id": "overlay_C32EE5A5_CD92_5794_41C7_613AB4FFE10B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_EE6D6708_CAF2_D49B_41A3_2C76BD96ECED",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>RENCONTRE ENTRE LES DOCTEURS DE L'UNIVERSITE.</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText39049"
 },
 "height": "100%"
},
{
 "id": "htmlText_D25BFC32_CB72_B48F_41C6_3034190FACEE",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>Aider les \u00c9tudiants en difficult\u00e9s par l\u2019\u00e9coute et la recherche de solution adapt\u00e9e ;</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>Encadrer les communaut\u00e9s virtuelles et les associations d\u2019\u00e9tudiants ;</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>D\u00e9velopper des espaces num\u00e9riques de socialisation \u00e0 Abidjan et \u00e0 l'int\u00e9rieur du pays ;</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>Faciliter l'inclusion des \u00e9tudiants en situation de handicap ;</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>\u0152uvrer \u00e0 la coh\u00e9sion, \u00e0 la discipline, au civisme et \u00e0 l\u2019\u00e9panouissement des \u00e9tudiants ;</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>Maintenir le contact avec les \u00e9tudiants et leurs parents.</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText33527"
 },
 "height": "100%"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EE6F6706_CAF2_D497_41E8_871E42DC6E2A, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_1_HS_0_0.png",
      "width": 259,
      "class": "ImageResourceLevel",
      "height": 267
     }
    ]
   },
   "pitch": -25.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.8,
   "hfov": 21.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C11001F2_CBF5_AF8C_41E7_755D3C460EFF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.27
  }
 ],
 "id": "overlay_C2D472A1_CDB6_6D8C_41E6_3E70F90BE1C5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_D8E83FA2_CBAD_B38C_41E3_D7DDC5F5D7D7, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D606C976_CB92_5F74_41DA_FA2E7A35F4EC",
   "yaw": 8.25,
   "pitch": -31.2,
   "distance": 100,
   "hfov": 14.82
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.25,
   "hfov": 14.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.2
  }
 ],
 "id": "overlay_D8759E93_CBB2_D58D_41BC_4C19DF97311C",
 "data": {
  "label": "Arrow 06c"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_EFCF01DB_CA93_EFBD_41E7_AA938BE0A5ED",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>EVENEMENTS</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>COMPETITIONS</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText35236"
 },
 "height": "100%"
},
{
 "id": "htmlText_EDA228C8_CAF2_5D9B_41E7_769574049E70",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>PRENDRE UN RDV AVEC LE DG.</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText40792"
 },
 "height": "100%"
},
{
 "id": "htmlText_EEA35F21_CAFD_B48D_41E9_1BF3433309B0",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "borderSize": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:Tahoma, Geneva, sans-serif;\"><B>DISCUTER AVEC LE DG.</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText43181"
 },
 "height": "100%"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9, this.camera_FCB2D5B2_F24E_7D55_41E1_ECB75D1815E5); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_0_0.png",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   },
   "pitch": -2.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.23
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.82,
   "hfov": 5.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -2.67
  }
 ],
 "id": "overlay_C2EC9C7A_CDB5_D57F_41E8_3F4FEA80B62B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -32.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_1_0.png",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "pitch": -2.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.92
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.17,
   "hfov": 4.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": -2.91
  }
 ],
 "id": "overlay_C2F941AB_CDB2_6F9D_41E4_8B13637B7293",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -62.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_2_0.png",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": -4.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.65
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.33,
   "hfov": 5.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -4.72
  }
 ],
 "id": "overlay_C35BB823_CDB2_DC8D_41DD_213C7D6B6C4A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -96.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_3_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": -3.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.38
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.98,
   "hfov": 8.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.73
  }
 ],
 "id": "overlay_C2981F87_CDAD_B395_41D3_6939CC32A0A7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 115.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_4_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": -4.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.53,
   "hfov": 8.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.06
  }
 ],
 "id": "overlay_C2AFFAC9_CDAE_5D9D_41E5_D8730BEDCDEB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_ECB511C1_CAF6_EF93_41E8_FB7F0106C044, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDFF3AD1_CD72_BD8D_41E1_00EE0A589F98",
   "yaw": -1.95,
   "pitch": -6.26,
   "distance": 100,
   "hfov": 8.83
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.95,
   "hfov": 8.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ],
 "id": "overlay_C2C4A4E0_CDAE_758C_41DC_9D8951860C88",
 "data": {
  "label": "Info Red 01"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EDFE348A_CAF2_559F_41E1_A7BCCDD72490, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D7F90010_CDB7_AC8B_41E6_432436E4BD5E",
   "yaw": -2.45,
   "pitch": -31.15,
   "distance": 100,
   "hfov": 17.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.45,
   "hfov": 17.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.15
  }
 ],
 "id": "overlay_C2C0D519_CD92_54BC_41C6_66AC47B8302E",
 "data": {
  "label": "Info Red 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E, this.camera_FD7C07EC_F24E_7CCD_41C2_94BA1D4957B7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 127.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_1_HS_0_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 255
     }
    ]
   },
   "pitch": -18.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.36,
   "hfov": 24.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.57
  }
 ],
 "id": "overlay_C2029945_CDB2_FC94_41C8_F5F6B5C983FC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9, this.camera_FD7657A6_F24E_7D7D_41CE_148D6AF5AC92); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 41.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_1_HS_1_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -7.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.4,
   "hfov": 7.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.25
  }
 ],
 "id": "overlay_C2FC4F87_CDB2_7394_41D2_FAB5AB414AAD",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_EDA498B9_CAF2_5DFD_41E9_C9B6E772C309, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -6.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0_HS_2_0.png",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ]
   },
   "pitch": -9.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.27,
   "hfov": 13.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C116AAF9_CBF2_BD7C_41E2_DFC364495AB6_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.5
  }
 ],
 "id": "overlay_C2BF3535_CDB2_74F4_41B9_395371997F5C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D600798A_CB92_5F9C_41D8_E75F0AC3F931",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C26E20E8_CD92_6D9B_41DB_5DAA049184CA_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DDE1DAC8_CD72_BD9C_41E0_75D75E4409AA",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C110BB6F_CBF5_BC95_41B0_E3563B886F25_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E572B0F3_CA92_AD8C_41E1_4C1F5E4E9478",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C120B739_CBF3_F4FC_41C9_2443DAA182C9_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DDFCFAD4_CD72_BD8B_41E7_613CCCEAA4A3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C26FE3B1_CD92_538D_41D2_C8BEC16B3F11_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DDE0FAC4_CD72_BD8B_41D4_048E9E5C55B8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C117722E_CBF2_6C94_41CC_82F6ACFE08E6_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DDFC2AD5_CD72_BDB5_41CB_47D9A57E3265",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C2E5464F_CD93_D495_41DD_9896A2853E38_1_HS_0_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D606C976_CB92_5F74_41DA_FA2E7A35F4EC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D9659DBB_CBB2_D7FD_41E3_9994FE841D2E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DDFF3AD1_CD72_BD8D_41E1_00EE0A589F98",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C117D7D2_CBF2_538C_41E0_7A1E71654AD4_1_HS_5_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_D7F90010_CDB7_AC8B_41E6_432436E4BD5E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C1166F02_CBF2_D48F_41B6_08C8012732F5_0_HS_0_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "rowCount": 6
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "paddingTop": 0,
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "data": {
  "name": "Player476"
 },
 "vrPolyfillScale": 1,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
