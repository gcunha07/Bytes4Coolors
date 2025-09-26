function generatorHexa() {
	return " #000000";
}

export default function ComponenteColor(){

  const [paleta, setPaleta] = setState([
	{hex: generatorHexa(), lock: false},
	{hex: generatorHexa(), lock: false},
	{hex: generatorHexa(), lock: false},
	{hex: generatorHexa(), lock: false},
	{hex: generatorHexa(), lock: false}
  ])
}