const man = [
  ` (o _ o)/
<)     )
 /     \\`,

  `\\(- _ -)
   (     (>
   /     \\`,

  ` (o _ o)/
  )     (
  /     \\`,

  ` (- _ -)
<)     (> `,

  ` (o _ o)
-)   -(
 /    \\`,

  ` (o _ o)
 )-    (-
 /    \\`,
];

const styles = [
  "color: red",
  "color: orange",
  "color: green",
  "color: blue",
  "color: purple",
  "color: cyan",
];

const animate = () => {
  let i = 0;

  setInterval(() => {
    console.clear();

    console.log(
      `%c ${man[i % man.length]}`,
      styles[i % styles.length],
    );

    i++;
  }, 300);
};

animate();
