function contar() {
   var ini = window.document.getElementById('iinicio')
   var fim = window.document.getElementById('ifim')
   var pas = window.document.getElementById('ipasso')
   var res = window.document.getElementById('res')
   if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) { 
      window.alert('[ERRO] Faltam dados!' )
   } else {
      res.innerHTML = 'Contando:'
      var i = Number(ini.value)
      var f = Number(fim.value)
      var p = Number(pas.value)
   }
   
}
