function contar() {
   var ini = window.document.getElementById('iinicio')
   var fim = window.document.getElementById('ifim')
   var pas = window.document.getElementById('ipasso')
   var res = window.document.getElementById('res')

   if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) { 
      res.innerHTML = `Impossivel contar`
      window.alert('[ERRO] Faltam dados!' )
   } else {
      res.innerHTML = 'Contando: '
      var i = Number(ini.value)
      var f = Number(fim.value)
      var p = Number(pas.value)
      if (p <= 0) {
         window.alert('Passo inválido! Considerando PASSO 1')
         p = 1
      }
      if (i < f) {
      for(var c = i;  c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449} `
         } 
         
      } else {
         for(var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
         }
      }
      res.innerHTML += `\u{1F3C1}`
   } 
}
