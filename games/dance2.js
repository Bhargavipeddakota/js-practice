const man = [
  `
 (o _ o)/
<)     )
 /     \\`,
  `\\(- _ -)
   (     (>
   /     \\`,
  `\(o _ o)/
  )     (
  /     \\`,
  `(- _ -)
<)     (>`,
  `(o _ o)
-)   -(
 /    \\`,
  `(o _ o)
 )-    (-
 /    \\`,
];
const animate = () => {
let i = 0; 
setInterval(() => {
  console.clear();
  console.log(man[i++ % man.length]);
},100);
}

animate();