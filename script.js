const { Map, Marker, InfoWindow, LatLng } = google.maps

const position = { lat: 50.45, lng: 30.5 };
const options = {
  center: position,
  zoom: 12,
}

const ourOperatives = [
  { position: { lat: 50.44934873521296, lng: 30.513466645452688 }, title: "Golden gate", description: "Золотые ворота — памятник оборонного зодчества Древней Руси времён княжения Ярослава Мудрого. Исторически служили главным въездом в киевский Верхний город с южной стороны.", image: "images/golden_gate.jpeg"},
  { position: { lat: 50.453051368868486, lng: 30.514367867609355}, title: "Сathedral Sofia Kiyivska", description: "Национальный заповедник «София Киевская» — украинский исторический и архитектурный заповедник национального значения.", image: "images/sophia.jpeg"  },
  { position: { lat: 50.44514022408798, lng: 30.50883178855745 }, title: "Vladimirsky Cathedral", description: "Владимирский собор — памятник неовизантийской архитектуры в Киеве на бульваре Тараса Шевченко, над украшением которого работали ведущие художники Российской империи.", image: "images/volodymyrsky.jpeg" },
  { position: { lat: 50.445614672638364, lng: 30.528831931590826 }, title: "House with Chimeras", description: "Дом с химерами — кирпичное здание в стиле модерн, расположенное в столице Украины, Киеве. Своё название дом получил благодаря скульптурным украшениям, тематика которых — наземный и подводный животный мир, атрибуты охоты, сказочные существа.", image: "images/house.jpeg" },
  { position: { lat: 50.435261166487315, lng: 30.557618118971302 }, title: "Kyiv-Pechersk Lavra", description: "Свя́то-Успе́нская Ки́ево-Пече́рская ла́вра — один из первых по времени основания монастырей Киевской Руси. Одна из важнейших православных святынь, третий Удел Богородицы. Печерский монастырь был основан в 1051 году при Ярославе Мудром монахом Антонием, родом из Любеча, и его учеником Феодосием.", image: "images/lavra.jpeg" }, 
  { position: { lat: 50.42774032271314, lng: 30.56269449836091 }, title: "Motherland",description: "«Ро́дина-мать» — монументальная скульптура в Киеве на правом берегу Днепра. Расположена на территории Музея истории Украины во Второй мировой войне. Открыта в составе музейного комплекса в 1981 году в День Победы. Комплекс открывал Генеральный секретарь ЦК КПСС Леонид Брежнев.", image: "images/mother.jpeg" }, 
  
]


const myMap = new Map(map, options);

const content = /* html */`
  <div id="content">
    <h1 id="firstHeading" class="firstHeading">{title}</h1>
    <img src="{image}" alt="">
    <div id="bodyContent">
      <p>{description}</p>
    </div>
  </div>
  
`


const markers = []

ourOperatives.forEach((({ title, position, description, image }) => {
  const marker = new Marker({ map: myMap, title, position })
  const info = new InfoWindow({ content: content.replace('{title}', title).replace('{description}', description).replace('{image}', image) })

  markers.push(marker)

  marker.addListener('click', () => info.open({ anchor: marker, map: myMap, shouldFocus: false, }))
}))

// const myMarker = new Marker({map: myMap, position})




let i = 0

setInterval(
  () => {
    const {lat, lng} = ourOperatives[i++ % ourOperatives.length].position
    myMap.panTo(new LatLng(lat, lng))
  },
  200000
)

 