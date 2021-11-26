function remove_line_break(string){
  var string = string.replace(/(\r\n|\n|\r)/gm, "");
  return string
}

module.exports=remove_line_break