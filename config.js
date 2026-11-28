/*
  CONFIGURAÇÃO DOS PRESENTES
  ---------------------------------------------
  Coloque as imagens nas pastas:
    assets/presentes/
    assets/acoes/

  Depois indique abaixo o nome exato do arquivo.
  A ordem deste array é a ordem em que os cartões aparecem.
  Para mudar a sequência, basta mover os objetos de posição.
*/

const PRESENTES = [
  {
    "presente": "assets/presentes/Seguir.webp",
    "acao": "assets/acoes/Seguir.webp",
    "nome": "Seguidor Novo"
  },
  {
    "presente": "assets/presentes/Likes.webp",
    "acao": "assets/acoes/Likes.webp",
    "nome": "Zombie Likes"
  },
  {
    "presente": "assets/presentes/Rosa.webp",
    "acao": "assets/acoes/Rosa_acao.png",
    "nome": "Zumbi Armadura"
  },
  {
    "presente": "assets/presentes/Incrivel.webp",
    "acao": "assets/acoes/Incrivel.png",
    "nome": "God Apple"
  },
  {
    "presente": "assets/presentes/Popular.webp",
    "acao": "assets/acoes/Popular.png",
    "nome": "Golem"
  },
  {
    "presente": "assets/presentes/Fogos_de_artificio_efeito_aranha.webp",
    "acao": "assets/acoes/Fogos_de_artificio_efeito_aranha.webp",
    "nome": "Aranha"
  },
  {
    "presente": "assets/presentes/Maos_fazendo_coracao.webp",
    "acao": "assets/acoes/Maos_fazendo_coracao.webp",
    "nome": "Zumbie Totem"
  },
  {
    "presente": "assets/presentes/Colar_da_amizade.webp",
    "acao": "assets/acoes/Colar_da_amizade.png",
    "nome": "Zombie Boss"
  },
  {
    "presente": "assets/presentes/Mini_dino.webp",
    "acao": "assets/acoes/Mini_dino.webp",
    "nome": "Totem"
  },
  {
    "presente": "assets/presentes/Rosa_10.webp",
    "acao": "assets/acoes/Rosa_10.webp",
    "nome": "Rino"
  },
  {
    "presente": "assets/presentes/Muito_bem_.webp",
    "acao": "assets/acoes/Muito_bem_.webp",
    "nome": "Piglin"
  },
  {
    "presente": "assets/presentes/Perfume.webp",
    "acao": "assets/acoes/Perfume.webp",
    "nome": "Lobisomen"
  },
  {
    "presente": "assets/presentes/Capybara.webp",
    "acao": "assets/acoes/Capybara.png",
    "nome": "Tnt"
  },
  {
    "presente": "assets/presentes/Rosquinha.webp",
    "acao": "assets/acoes/Rosquinha.webp",
    "nome": "Esqueleto Mago"
  },
  {
    "presente": "assets/presentes/Chapeu_e_Bigode.webp",
    "acao": "assets/acoes/Chapeu_e_Bigode.png",
    "nome": "Papai Noel"
  },
  {
    "presente": "assets/presentes/Bone.webp",
    "acao": "assets/acoes/Bone.png",
    "nome": "Terror"
  },
  {
    "presente": "assets/presentes/Marca_do_Amor.webp",
    "acao": "assets/acoes/Marca_do_Amor.webp",
    "nome": "Bedrock Golem"
  },
  {
    "presente": "assets/presentes/Grou_de_papel.webp",
    "acao": "assets/acoes/Grou_de_papel.webp",
    "nome": "Armadura"
  },
  {
    "presente": "assets/presentes/oculos_escuros.webp",
    "acao": "assets/acoes/oculos_escuros.webp",
    "nome": "Invasão"
  },
  {
    "presente": "assets/presentes/Cogumelo_Cantor.webp",
    "acao": "assets/acoes/Cogumelo_Cantor.png",
    "nome": "Warden"
  },
  {
    "presente": "assets/presentes/Controle_de_videogame.webp",
    "acao": "assets/acoes/Controle_de_videogame.png",
    "nome": "Spawner"
  },
  {
    "presente": "assets/presentes/Super_GG.webp",
    "acao": "assets/acoes/Super_GG.webp",
    "nome": "Reviver"
  },
  {
    "presente": "assets/presentes/Maos_em_coracao.webp",
    "acao": "assets/acoes/Maos_em_coracao.webp",
    "nome": "Warlok"
  },
  {
    "presente": "assets/presentes/Confete.webp",
    "acao": "assets/acoes/Confete.png",
    "nome": "Wither"
  },
  {
    "presente": "assets/presentes/Urso_Misha.webp",
    "acao": "assets/acoes/Urso_Misha.webp",
    "nome": "Mesa de Encantamento"
  },
  {
    "presente": "assets/presentes/oculos_do_Amor.webp",
    "acao": "assets/acoes/oculos_do_Amor.webp",
    "nome": "ProjectEX"
  },
  {
    "presente": "assets/presentes/Coracoes.webp",
    "acao": "assets/acoes/Coracoes.png",
    "nome": "Armadura Top"
  },
  {
    "presente": "assets/presentes/Corgi.webp",
    "acao": "assets/acoes/Corgi.png",
    "nome": "Healme"
  },
  {
    "presente": "assets/presentes/Luvas_de_boxe.webp",
    "acao": "assets/acoes/Luvas_de_boxe.webp",
    "nome": "Eye Guardian"
  },
  {
    "presente": "assets/presentes/DJ_oculos.webp",
    "acao": "assets/acoes/DJ_oculos.png",
    "nome": "Avaritia"
  },
  {
    "presente": "assets/presentes/Pistola_de_dinheiro.webp",
    "acao": "assets/acoes/Pistola_de_dinheiro.webp",
    "nome": "Herobrine"
  },
  {
    "presente": "assets/presentes/Cisne.webp",
    "acao": "assets/acoes/Cisne.png",
    "nome": "Imortal"
  },
  {
    "presente": "assets/presentes/Fogos_de_artificio.webp",
    "acao": "assets/acoes/Fogos_de_artificio.webp",
    "nome": "Limpar Inventario"
  },
  {
    "presente": "assets/presentes/Galaxia.webp",
    "acao": "assets/acoes/Galaxia.webp",
    "nome": "Wither Storm"
  },
  {
    "presente": "assets/presentes/Chuva_de_meteoros.webp",
    "acao": "assets/acoes/Chuva_de_meteoros.png",
    "nome": "Crash"
  },
  {
    "presente": "assets/presentes/Leon_o_gatinho.webp",
    "acao": "assets/acoes/Leon_o_gatinho.webp",
    "nome": "Super TNT"
  },
];

