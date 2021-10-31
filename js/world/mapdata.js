var simplemaps_worldmap_mapdata={
	main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
		state_description:   'State description',
    	state_color: "#88A4BC",
    	state_hover_color: "#3333FF",
    	state_url: "javascript:alert();",

    	border_size: "1",
		border_color: '#f3f3f3',
		all_states_inactive: 'yes',
		all_states_zoomable: 'no',		
		
		//Location defaults
    	location_description: "",
    	location_color: "#FF1570",
		location_opacity: .8,
		location_hover_opacity: 1,
    	location_url: "https://simplemaps.com",
    	location_size: "30",
		location_type: 'marker', // circle, square, image
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#ffffff',	
		label_hover_color: '#ffffff',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
    	hide_eastern_labels: false,
		
		//Zoom settings
    	zoom: "yes",
    	manual_zoom: "no",
    	back_image: "no",
    	initial_back: "no",
    	initial_zoom: "-1",
    	initial_zoom_solo: "no",
    	region_opacity: 1,
    	region_hover_opacity: 0.6,
    	zoom_out_incrementally: "yes",
    	zoom_percentage: 0.99,
    	zoom_time: 0.5,
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'world',
		auto_load: 'yes',		
    rotate: '0',
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
    import_labels: 'no',
		fade_time:  .1, //time to fade out		
		link_text: 'View Website'  //Text mobile browsers will see for links	
		
	},
  state_specific: {
    AE: {
      name: "United Arab Emirates",
      inactive: "no"
    },
    AF: {
      name: "Afghanistan"
    },
    AL: {
      name: "Albania"
    },
    AM: {
      name: "Armenia"
    },
    AO: {
      name: "Angola"
    },
    AR: {
      name: "Argentina"
    },
    AT: {
      name: "Austria"
    },
    AU: {
      name: "Australia"
    },
    AZ: {
      name: "Azerbaidjan"
    },
    BA: {
      name: "Bosnia-Herzegovina"
    },
    BD: {
      name: "Bangladesh"
    },
    BE: {
      name: "Belgium"
    },
    BF: {
      name: "Burkina Faso"
    },
    BG: {
      name: "Bulgaria"
    },
    BH: {
      name: "Bahrain"
    },
    BI: {
      name: "Burundi"
    },
    BJ: {
      name: "Benin"
    },
    BN: {
      name: "Brunei Darussalam"
    },
    BO: {
      name: "Bolivia"
    },
    BR: {
      name: "Brazil"
    },
    BS: {
      name: "Bahamas"
    },
    BT: {
      name: "Bhutan"
    },
    BW: {
      name: "Botswana"
    },
    BY: {
      name: "Belarus"
    },
    BZ: {
      name: "Belize"
    },
    CA: {
      name: "Canada"
    },
    CD: {
      name: "Congo"
    },
    CF: {
      name: "Central African Republic"
    },
    CG: {
      name: "Congo"
    },
    CH: {
      name: "Switzerland"
    },
    CI: {
      name: "Ivory Coast"
    },
    CL: {
      name: "Chile"
    },
    CM: {
      name: "Cameroon"
    },
    CN: {
      name: "China"
    },
    CO: {
      name: "Colombia"
    },
    CR: {
      name: "Costa Rica"
    },
    CU: {
      name: "Cuba"
    },
    CV: {
      name: "Cape Verde"
    },
    CY: {
      name: "Cyprus"
    },
    CZ: {
      name: "Czech Republic"
    },
    DE: {
      name: "Germany"
    },
    DJ: {
      name: "Djibouti"
    },
    DK: {
      name: "Denmark"
    },
    DO: {
      name: "Dominican Republic"
    },
    DZ: {
      name: "Algeria"
    },
    EC: {
      name: "Ecuador"
    },
    EE: {
      name: "Estonia"
    },
    EG: {
      name: "Egypt"
    },
    EH: {
      name: "Western Sahara"
    },
    ER: {
      name: "Eritrea"
    },
    ES: {
      name: "Spain"
    },
    ET: {
      name: "Ethiopia"
    },
    FI: {
      name: "Finland"
    },
    FJ: {
      name: "Fiji"
    },
    FK: {
      name: "Falkland Islands"
    },
    FR: {
      name: "France"
    },
    GA: {
      name: "Gabon"
    },
    GB: {
      name: "Great Britain"
    },
    GE: {
      name: "Georgia"
    },
    GF: {
      name: "French Guyana"
    },
    GH: {
      name: "Ghana"
    },
    GL: {
      name: "Greenland"
    },
    GM: {
      name: "Gambia"
    },
    GN: {
      name: "Guinea"
    },
    GQ: {
      name: "Equatorial Guinea"
    },
    GR: {
      name: "Greece"
    },
    GS: {
      name: "S. Georgia & S. Sandwich Isls."
    },
    GT: {
      name: "Guatemala"
    },
    GW: {
      name: "Guinea Bissau"
    },
    GY: {
      name: "Guyana"
    },
    HN: {
      name: "Honduras"
    },
    HR: {
      name: "Croatia"
    },
    HT: {
      name: "Haiti"
    },
    HU: {
      name: "Hungary"
    },
    IC: {
      name: "Canary Islands"
    },
    ID: {
      name: "Indonesia"
    },
    IE: {
      name: "Ireland"
    },
    IL: {
      name: "Israel"
    },
    IN: {
      name: "India"
    },
    IQ: {
      name: "Iraq"
    },
    IR: {
      name: "Iran"
    },
    IS: {
      name: "Iceland"
    },
    IT: {
      name: "Italy"
    },
    JM: {
      name: "Jamaica"
    },
    JO: {
      name: "Jordan"
    },
    JP: {
      name: "Japan"
    },
    KE: {
      name: "Kenya"
    },
    KG: {
      name: "Kyrgyzstan"
    },
    KH: {
      name: "Cambodia"
    },
    KP: {
      name: "North Korea"
    },
    KR: {
      name: "South Korea"
    },
    KW: {
      name: "Kuwait"
    },
    KZ: {
      name: "Kazakhstan"
    },
    LA: {
      name: "Laos"
    },
    LK: {
      name: "Sri Lanka"
    },
    LR: {
      name: "Liberia"
    },
    LS: {
      name: "Lesotho"
    },
    LT: {
      name: "Lithuania"
    },
    LU: {
      name: "Luxembourg"
    },
    LV: {
      name: "Latvia"
    },
    LY: {
      name: "Libya"
    },
    MA: {
      name: "Morocco"
    },
    MD: {
      name: "Moldavia"
    },
    ME: {
      name: "Montenegro"
    },
    MG: {
      name: "Madagascar"
    },
    MK: {
      name: "Macedonia"
    },
    ML: {
      name: "Mali"
    },
    MM: {
      name: "Myanmar"
    },
    MN: {
      name: "Mongolia"
    },
    MR: {
      name: "Mauritania"
    },
    MW: {
      name: "Malawi"
    },
    MX: {
      name: "Mexico"
    },
    MY: {
      name: "Malaysia"
    },
    MZ: {
      name: "Mozambique"
    },
    NA: {
      name: "Namibia"
    },
    NC: {
      name: "New Caledonia (French)"
    },
    NE: {
      name: "Niger"
    },
    NG: {
      name: "Nigeria"
    },
    NI: {
      name: "Nicaragua"
    },
    NL: {
      name: "Netherlands"
    },
    NO: {
      name: "Norway"
    },
    NP: {
      name: "Nepal"
    },
    NZ: {
      name: "New Zealand"
    },
    OM: {
      name: "Oman"
    },
    PA: {
      name: "Panama"
    },
    PE: {
      name: "Peru"
    },
    PG: {
      name: "Papua New Guinea"
    },
    PH: {
      name: "Philippines"
    },
    PK: {
      name: "Pakistan"
    },
    PL: {
      name: "Poland"
    },
    PR: {
      name: "Puerto Rico"
    },
    PS: {
      name: "Palestine"
    },
    PT: {
      name: "Portugal"
    },
    PY: {
      name: "Paraguay"
    },
    QA: {
      name: "Qatar"
    },
    RO: {
      name: "Romania"
    },
    RS: {
      name: "Serbia"
    },
    RU: {
      name: "Russia"
    },
    RW: {
      name: "Rwanda"
    },
    SA: {
      name: "Saudi Arabia"
    },
    SB: {
      name: "Solomon Islands"
    },
    SD: {
      name: "Sudan"
    },
    SE: {
      name: "Sweden"
    },
    SI: {
      name: "Slovenia"
    },
    SK: {
      name: "Slovak Republic"
    },
    SL: {
      name: "Sierra Leone"
    },
    SN: {
      name: "Senegal"
    },
    SO: {
      name: "Somalia"
    },
    SR: {
      name: "Suriname"
    },
    SS: {
      name: "South Sudan"
    },
    SV: {
      name: "El Salvador"
    },
    SY: {
      name: "Syria"
    },
    SZ: {
      name: "Swaziland"
    },
    TD: {
      name: "Chad"
    },
    TG: {
      name: "Togo"
    },
    TH: {
      name: "Thailand"
    },
    TJ: {
      name: "Tadjikistan"
    },
    TL: {
      name: "East Timor"
    },
    TM: {
      name: "Turkmenistan"
    },
    TN: {
      name: "Tunisia"
    },
    TR: {
      name: "Turkey"
    },
    TT: {
      name: "Trinidad and Tobago"
    },
    TW: {
      name: "Taiwan"
    },
    TZ: {
      name: "Tanzania"
    },
    UA: {
      name: "Ukraine"
    },
    UG: {
      name: "Uganda"
    },
    US: {
      name: "United States"
    },
    UY: {
      name: "Uruguay"
    },
    UZ: {
      name: "Uzbekistan"
    },
    VE: {
      name: "Venezuela"
    },
    VN: {
      name: "Vietnam"
    },
    VU: {
      name: "Vanuatu"
    },
    YE: {
      name: "Yemen"
    },
    ZA: {
      name: "South Africa"
    },
    ZM: {
      name: "Zambia"
    },
    ZW: {
      name: "Zimbabwe"
    }
  },
  locations: {
  },
  regions: {
    "0": {
      name: "North America",
      states: [
        "MX",
        "CA",
        "US",
        "GL",
        "PR",
        "JM",
        "HT",
        "BZ",
        "CR",
        "DO",
        "GT",
        "HN",
        "NI",
        "BS",
        "CU",
        "PA",
        "SV"
      ],
      color: "#48a584"
    },
    "1": {
      name: "South America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "CL",
        "GY",
        "GF",
        "PY",
        "SR",
        "UY"
      ],
      color: "#5c5b5a"
    },
    "2": {
      name: "Europe",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA"
      ],

      color: "#e65e5e"
    },
    "3": {
      name: "Africa",
      states: [
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW"
      ],
      color: "#5e8a8b"
    },
    
    "4": {
      name: "Asia",
      states: [
        "QA",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG",
        "TW",
        "IN",
        "NP",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "KP",
        "PH",
        "KR",
        "CN",
        "MN",
        "MY",
        "ID",
        "KZ",
        "RU"
      ],
      color: "#3eb8c5"
    },
    "5": {
      name: "Oceania",
      states: [
        "AU",
        "PG",
        "FJ",
        "NZ"
      ],
      color: "#33FFCC"
    }
  },
  labels: {}
};