


module.exports = function(sequelize, DataTypes) {

    // Creates a "donations" model that matches up with DB
    var Recipients = sequelize.define("recipients", {
    
category: {
type: DataTypes.STRING,
allowNull: false,
validate: {
len: [1]
}
},  

quantity_needed: {
type: DataTypes.INTEGER,
allowNull: false,
validate: {
len: [1]
}
},
      
recipientText: {
type: DataTypes.TEXT,
allowNull: true,
validate: {
len: [1]
}
},
               
name:{
type:DataTypes.STRING,
allowNull: false,
validate: {
len: [1]
}
},
contact:{
  type:DataTypes.STRING,
  allowNull: false,
  validate: {
  len: [1]
}
},
created_at: {
type: DataTypes.DATE,
allowNull: false,
validate: {
len: [1]
}
},
updated_at: {
type: DataTypes.DATE,
allowNull: false,
validate: {
len: [1]
}
},      
    
      
  });
    
    // Syncs with DB
    return Recipients;
    
    }
    
    