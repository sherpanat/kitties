const cats = [
  {
    name: "Neko",
    url:
      "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg"
  },
  {
    name: "Sherlock",
    url:
      "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"
  },
  {
    name: "Austin",
    url:
      "https://image.nj.com/home/njo-media/width620/img/entertainment_impact/photo/lil-bub-catsbury-park-cat-convention-asbury-park-2018jpg-42ba0699ef9f22e0.jpg"
  },
  {
    name: "Sakura",
    url: "https://www.scarymommy.com/wp-content/uploads/2018/01/c1.jpg?w=700"
  }
];

const getRandomCat = cats => {
  return cats[Math.floor(Math.random() * cats.length)];
};

export { cats, getRandomCat };
