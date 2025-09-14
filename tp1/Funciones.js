function dibujo (offsetX) {
  for(let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      
      if (( x + y ) % 2 == 0) {
        fill (color1);
      } else {
        fill (color2);
      }
 
 rect (x * tam + offsetX, y * tam, tam, tam);
 
 let cx = x * tam + tam/2 + offsetX;
 let cy = y * tam + tam/2;
 
 let d = dist (mouseX, mouseY, cx, cy);
 
 let diam = tam;
 let circuloRelleno;
 
 if (d <tam/2) {
     diam = tam/2;
   circuloRelleno = color(random(255), random (255), random (255));
 } else {
   
   if ((x+y) % 2 == 0) {
     circuloRelleno = color2;
   } else {
     circuloRelleno = color1;
   }
 }
 
 fill (circuloRelleno);
 ellipse (cx,cy,diam,diam);
 
       }
  }
}
