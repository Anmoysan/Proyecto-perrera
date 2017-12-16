/**
 * Funcion que devuelve el get especifico de una url
 * @param variable - Variables pasada por get que queremos conseguir sus datos
 * @returns {*} - Devuelve el valor dado a esa variable o nada si no existe la variable
 */
function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i=0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if(pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}