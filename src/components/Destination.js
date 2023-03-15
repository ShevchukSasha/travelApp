import './DestinationStyle.css'
import DestinationData from "./DestinationData";
import First from '../assets/destinationFirst.jpg'
import Second from '../assets/dectinationFourth.jpg'
import Third from '../assets/destinationSecond.jpg'
import Fourth from '../assets/destinationThird.jpg'

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tour give you opportunity to see a lot, within a time frame</p>

            <DestinationData
                className='first-des'
                heading='Scotland : Highland Clans and the Trail of Tartan'
                text='Immerse in the history, culture and stunning scenery of the Scottish Highlands guided by a globe-trotting Scottish bagpiper. Go behind the scenes of Scotland`s oldest and most revered kilt-makers to discover the history and importance of Scottish tartans. Dine with the Earl of Cromartie, current chief of Clan Mackenzie, and drop into the seat of their rivals, Clan Munro. Along the way, uncover the history House of Stuart and the Jacobite rebellion, sip Scotch whisky, explore historic castles and ruins, and enjoy the music and dance of a traditional Cèilidh.'
                img1={First}
                img2={Second}
            />

            <DestinationData
                className='first-des-revers'
                heading='Ancient Wonders: Egypt & The Nile'
                text='Egypt’s archaeological treasures have delighted and mystified visitors for thousands of years. Follow in the footsteps of explorers and royalty to experience the thrill of discovery while exploring the Great Pyramids of Giza, traversing the Avenue of the Sphinxes, and climbing into the Tomb of Tutankhamun. You`ll spend a day in the Sahara Desert and Wadi al-Hitan (Valley of the Whales) with its treasure trove of whale fossils. Atlas Obscura has arranged exclusive special access for our group to stay after public opening hours in the Valley of the Kings to explore the tombs of the former Egyptian kings without the crowds. History may stand still in the ruins of temples and tombs, but your expert Egyptologist guide will bring it to life in the stories of gods, pharaohs, and legends from the great ancient civilizations that once walked these lands. On this tour, you will gain an insider’s perspective on the bustling city of Cairo and the world-renowned sites at Giza, Saqqara, Luxor, Aswan, and Abu Simbel, all while enjoying traditional Egyptian hospitality and a four-night luxury cruise along the Nile'
                img1={Third}
                img2={Fourth}
            />

        </div>
    )
}

export default Destination