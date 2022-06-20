function ConvertToRoman(arabicNum) {
    //Définition des chiffres romains et de leur valeur respective
    const romanValue = {"(M)":100000,"(XC)":90000,"(L)":50000,"(XL)":40000,"(XXX)":30000,"(XX)":20000,"(X)":10000,"(XI)":9000,"(VIII)":8000,"(VII)":7000,"(VI)":6000,"(V)":5000,"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1};
    let roman = ''
   
    // Parcour les chiffres romains 
    // Ajoute la valeur romaine Tant que le nombre donnée est supèrieur au chiffre romain
    // Diminue le nombre donnée par la valeur du chiffre romain jusqu'a arriver à 0
    for ( let i in romanValue ) {
      while ( arabicNum >= romanValue[i] ) {
        roman += i;
        arabicNum -= romanValue[i];
      }
    }
    //la regex enlève les parenthèse intèrieurs pour les nombres supérieurs à 4999
    return roman.replace(/(?:\)\()+/g,"");
  }

console.log(ConvertToRoman(499999))
