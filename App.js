import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="head">
            <div className="logo">
                <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg" alt="logo" />
            </div>
            <div className="search">
                <input placeholder="Search for Restraunt"/>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard = ({ ResData })=>{
    const {name, cuisines, avgRating, areaName, totalRatingsString, cloudinaryImageId} = ResData?.info ;
    return(
        <>
        <div className="cards">
            <img className="card-img" alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId} />
            <h3>{name}</h3>  
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating} Stars ({totalRatingsString})</h4> 
            
            
                
        </div>
        </>
)};

const ResList = [
                  {
                    "info": {
                      "id": "448729",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/db985c4a-4176-4d8d-809f-d7f02a4e380b_448729.JPG",
                      "locality": "D Block",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "2.0K+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-19 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/kfc-d-block-ranjit-avenue-rest448729",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "804073",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/f00ca48a-56be-4c4c-8237-9ee29bcb60d2_804073.JPG",
                      "locality": "Ranjit Avenue",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "949",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-19 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "FREE ITEM"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.9",
                          "ratingCount": "780"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/pizza-hut-ranjit-avenue-rest804073",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "770165",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "67d6c3afbc3ebf32e988deafc9c9ace6",
                      "locality": "Medical Enclave",
                      "areaName": "VR Ambarsar Mall",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            "description": "Best in Chinese"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Chinese",
                                  "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹148"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/chinese-wok-medical-enclave-vr-ambarsar-mall-rest770165",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "76233",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d1c02b83-bd1d-4629-9cfc-98854fe24cbb_76233.JPG",
                      "locality": "C Block",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.1K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-19 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                            "description": "Best in Cakes & Desserts"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Cakes & Desserts",
                                  "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/the-belgian-waffle-co-c-block-ranjit-avenue-rest76233",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "770166",
                      "name": "Big Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_770166.JPG",
                      "locality": "Medical Enclave",
                      "areaName": "VR Ambarsar Mall",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "434792",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "708",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            "description": "Best in Chinese"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Chinese",
                                  "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹139"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/big-bowl-medical-enclave-vr-ambarsar-mall-rest770166",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "435674",
                      "name": "Oven Story Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/77bc6783-a5e0-44c1-86ae-b24de9fbe807_435674.jpg",
                      "locality": "Mohkampur",
                      "areaName": "Makboolpura",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "3534",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/oven-story-pizza-mohkampur-makboolpura-rest435674",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "138727",
                      "name": "Amritsari Nutri Kulcha and Chana Bhatura",
                      "cloudinaryImageId": "pmjhgnbxjzd77ggygwhf",
                      "locality": "Lawrence Road",
                      "areaName": "Lawrence Road",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Breakfast",
                        "Punjabi"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "parentId": "32183",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "4.4K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 20:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹130",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "73"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/amritsari-nutri-kulcha-and-chana-bhatura-lawrence-road-rest138727",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "76161",
                      "name": "Durga's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/30/831568c4-896e-4c55-96f1-9a2a83b6dbfc_76161 (1).jpg",
                      "locality": "Lawrence Road",
                      "areaName": "East Amritsar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts",
                        "Beverages",
                        "Sweets",
                        "Fast Food",
                        "Pizzas",
                        "Pastas",
                        "sandwich",
                        "Continental",
                        "Chinese"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "75459",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5.1K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "344"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/durgas-lawrence-road-east-amritsar-rest76161",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "76526",
                      "name": "The Brothers",
                      "cloudinaryImageId": "ctq5vxtey8o5bbhageen",
                      "locality": "Majitha Road",
                      "areaName": "Majitha Road",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Thalis",
                        "American",
                        "Fast Food",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "205876",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:29:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "2.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/the-brothers-majitha-road-rest76526",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "201152",
                      "name": "Sabri Bhathura Shop",
                      "cloudinaryImageId": "bfrmojabozukqdhgf11m",
                      "locality": "INA Colony",
                      "areaName": "INA Colony",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Punjabi"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "174040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.2K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 18:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "342"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/sabri-bhathura-shop-ina-colony-rest201152",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "75324",
                      "name": "Kale Da Dhaba",
                      "cloudinaryImageId": "iqaesjtp1d6qjfkhfwdb",
                      "locality": "Rani Ka Bagh",
                      "areaName": "Rani Ka Bagh",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Punjabi",
                        "Biryani",
                        "Italian",
                        "Mexican",
                        "Thalis",
                        "Continental",
                        "Indian",
                        "Sweets",
                        "American",
                        "Pastas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "113907",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "24K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "3.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/kale-da-dhaba-rani-ka-bagh-rest75324",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "75687",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/36f8f227-3cfd-401f-8917-d8ae10f077c7_75687.jpg",
                      "locality": "Ranjit Avenue block B",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.8K+",
                      "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "10-15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "982"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/subway-block-b-ranjit-avenue-rest75687",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "74868",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/d94659f5-2939-4fca-8a94-04776a385ec1_74868.jpg",
                      "locality": "Lawrence Road",
                      "areaName": "East Amritsar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "166",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "26K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-19 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "3.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/burger-king-lawrence-road-east-amritsar-rest74868",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "75704",
                      "name": "Annapurna Dhaba",
                      "cloudinaryImageId": "n8d80uhn7koleegbuecm",
                      "locality": "Lawrence Road",
                      "areaName": "Medical Enclave",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Thalis",
                        "Snacks",
                        "Beverages",
                        "Desserts",
                        "Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "34036",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "32K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹19",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "1.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/annapurna-dhaba-lawrence-road-medical-enclave-rest75704",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "827064",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/41450d67-a0cc-4584-ba4b-c9ae0469e2c4_827064.JPG",
                      "locality": "Block D",
                      "areaName": "Ranjeet Avenue",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2456",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "366",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/dominos-pizza-block-d-ranjeet-avenue-rest827064",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "605973",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/efe6472a-f503-47cf-9cec-10aaa80eb65d_605973.JPG",
                      "locality": "Sadar",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.8K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-19 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹51"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/mcdonalds-sadar-ranjit-avenue-rest605973",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "144803",
                      "name": "Umang vaishno dhaba and juice bar",
                      "cloudinaryImageId": "vzghq4uy2t8nqrmyqr10",
                      "locality": "Majitha Road",
                      "areaName": "North Amritsar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Snacks",
                        "Juices",
                        "Pizzas",
                        "Indian",
                        "Thalis",
                        "Fast Food"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "219287",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹130",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.2K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/umang-vaishno-dhaba-and-juice-bar-majitha-road-north-amritsar-rest144803",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "93090",
                      "name": "Muscleholics",
                      "cloudinaryImageId": "qsnwgolm9mkun4xhwt8z",
                      "locality": "C Block",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Beverages",
                        "Italian",
                        "Salads"
                      ],
                      "avgRating": 4.5,
                      "parentId": "142137",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "8.8K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "High%20Protein/rx%20tag%205.png",
                            "description": "High Protein"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                            "description": "Best in EatRight"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "High Protein",
                                  "imageId": "High%20Protein/rx%20tag%205.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in EatRight",
                                  "imageId": "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/muscleholics-c-block-ranjit-avenue-rest93090",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "755067",
                      "name": "Goila Butter Chicken",
                      "cloudinaryImageId": "2acf0681a049dea7dac7271cf7ccc560",
                      "locality": "Pushpa Tower",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Kebabs",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "322587",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "536",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/goila-butter-chicken-pushpa-tower-ranjit-avenue-rest755067",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "372369",
                      "name": "The Coffee Bean & Tea Leaf",
                      "cloudinaryImageId": "xksocudg422i6vjaklkw",
                      "locality": "D Block",
                      "areaName": "Ranjit Avenue",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "parentId": "649292",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "145",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-18 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "542"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-a994a321-be44-4bfa-bbb0-0d1aea7b876f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/amritsar/the-coffee-bean-and-tea-leaf-d-block-ranjit-avenue-rest372369",
                      "type": "WEBLINK"
                    }
                  }
]

const Body = ()=>{
    return(
    <div className="body">
        <div className="res-container">
            { ResList.map((restraunts)=> <ResCard key={restraunts.info.id} ResData = {restraunts} />) }
            
        </div>
    </div>
)};

const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Body/>
        </>
        
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);