import './TripStyles.css'
import TripData from "./TripData";
import Trip1 from '../assets/tripFirst.jpg'
import Trip2 from '../assets/tripSecond.jpg'
import Trip3 from '../assets/tripThird.jpg'

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps</p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}
                    heading='Trip in Turkmenistan'
                    text='On this sweeping, eclectic adventure through Turkmenistan, marvel at the towering white-marble structures of Ashgabat, roam through barren deserts and a world-class canyon, and spend the night camped out beside the flaming Gates of Hell. The top highlight: a night in the desert spent sleeping alongside a crater that has been continuously burning for nearly 50 years—the most beautiful accident ever created by well-meaning Soviet geologists.'
                />
                <TripData
                    image={Trip2}
                    heading='Trip in New Zealand'
                    text='Prepare for some of the most stunning natural wonders you`ve ever encountered as you take in dramatic mountain landscapes, glistening bioluminescent grottos, and fascinating geothermal phenomena, and curious natural wonders. You`ll travel by traditional Māori canoes to the mythic Mount Maunganui and take a helicopter to a glacier-fed waterfall worthy of a scene from Lord of the Rings.'
                />
                <TripData
                    image={Trip3}
                    heading='Trip in India'
                    text='In a rain-laden landscape with sweeping hills, deep valleys, and fast-flowing waterfalls, meet the ancient living root bridges of Cherrapunji. Here in one of the wettest places on earth, bridges aren’t simply built—they’re grown. Our expert local guides will lead us through villages and jungles, reachable only by several hours of remote trekking through this lush jungle landscape.'
                />
            </div>
        </div>
    )
}

export default Trip