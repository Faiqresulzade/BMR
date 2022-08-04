let name=prompt("Adinizi daxil edin");
let weight=prompt("Cəkinizi daxil edin");
let height=prompt("Boyunuzu daxil edin,metrle");
let BMR=weight/(height*height);
if(BMR>0& BMR<18.5) alert(name +", sizin netice UnderWeight");
else if(BMR>=18.5& BMR<=24.9) alert(name+", sizin netice Normal");
else if(BMR>=25& BMR<=29.9) alert(name+", sizin netice Owerweight");
else if(BMR>=30& BMR<=34.9) alert(name+", sizin netice Obese");
else alert(name+", sizin netice Extremely Obese");