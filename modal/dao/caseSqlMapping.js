// dao/caseSqlMapping.js
// CRUD SQL语句
var cas = {
  queryAll: 'select * from lgsafe.case',
  // insert:'INSERT INTO user(id, name, age) VALUES(0,?,?)',
  // update:'update user set name=?, age=? where id=?',
  // delete: 'delete from user where id=?',
  queryById: 'select * from lgsafe.case where id=?'
};

module.exports = cas;