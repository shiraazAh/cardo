export const animationReducer = (selectedCard, action) => {
        switch (action.type) {
          case "Brown":
            return {
              BrownCard: "selectedBrown_brown",
              BlueCard: "selectedBrown_blue",
              VioletCard: "selectedBrown_violet",
            }
          case "Blue": 
            return {
              BrownCard: "selectedBlue_brown",
              BlueCard: "selectedBlue_blue",
              VioletCard: "selectedBlue_violet",
            }
          case "Violet":
            return {
              BrownCard: "selectedViolet_brown",
              BlueCard: "selectedViolet_blue",
              VioletCard: "selectedViolet_violet",
            }
          default:
            break;
        }
    } 
  
export const initialCardPositionReducer = (initialCard, action) => {
        switch (action.type) {
          case "Brown":
            if(action.card === "selectedBlue_blue") {
              return {
                BrownCard: "selectedBlue_brown",
                BlueCard: "selectedBlue_blue",
                VioletCard: "selectedBlue_violet",
              }
            } else {
              return {
                BrownCard: "selectedViolet_brown",
                BlueCard: "selectedViolet_blue",
                VioletCard: "selectedViolet_violet",
              }
            }
          case "Blue": 
            if(action.card === "selectedBrown_brown") {
              return {
                BrownCard: "selectedBrown_brown",
                BlueCard: "selectedBrown_blue",
                VioletCard: "selectedBrown_violet",
              }
            } else {
              return {
                BrownCard: "selectedViolet_brown",
                BlueCard: "selectedViolet_blue",
                VioletCard: "selectedViolet_violet",
              }
            }
          case "Violet":
            if(action.card === "selectedBlue_blue") {
              return {
                BrownCard: "selectedBlue_brown",
                BlueCard: "selectedBlue_blue",
                VioletCard: "selectedBlue_violet",
              }
            } else {
              return {
                BrownCard: "selectedBrown_brown",
                BlueCard: "selectedBrown_blue",
                VioletCard: "selectedBrown_violet",
              }
            }
          case "AllFalse":
            return {
              BrownCard: false,
              BlueCard: false,
              VioletCard: false
            }
          default:
            break;
        }
    } 