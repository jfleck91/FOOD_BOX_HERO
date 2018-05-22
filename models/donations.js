
module.exports = function(sequelize, DataTypes) {

// Creates a "donations" model that matches up with DB
var Donations = sequelize.define("donations", {

    business: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
    }
  },

  food: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1]
  }
},

 quantity_avalaible: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
      len: [1]
    }
  },
        
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      len: [1]
    }
  },
        
    lastCall: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      len: [1]
    }
  },

    pickupDate: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      len: [1]
    }
  },

    donorText: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      len: [1]
    }
  },
              
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
      len: [1]
      }
      
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
      len: [1]
    }
  },      

 category:{
   type:DataTypes.STRING,
   allowNull: true,
   validate: {
    len: [1]
  }
 },

 allergen:{
  type:DataTypes.STRING,
  allowNull: true,
  validate: {
   len: [1]
 }
},

  
 });

// Syncs with DB
return Donations;

}

