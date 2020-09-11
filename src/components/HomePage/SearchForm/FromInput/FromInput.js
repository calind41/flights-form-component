import React, { useState } from "react";
import "./FromInput.css";

// import { locations } from "../Locations/Locations";
import Locations from "../Locations/Locations";

export default function FromInput() {
  const [acronym, setAcronym] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [locs, setLocs] = useState(locations);

  const receiveInput = (text, acronym) => {
    console.log("text is ", text);
    setFromValue(text);
    setAcronym(acronym);
  };

  const filterLocations = (evt) => {
    setFromValue(evt.target.value);
    let input, filter;
    input = evt.target;
    filter = evt.target.value.toLowerCase();

    let filtered_locs = [];
    let temp = locations;
    temp.map((location, index) => {
      const city = location.full.props.children[0];
      const country = location.full.props.children[1].props.children;
      let text = city + country;

      if (text.toLowerCase().indexOf(filter) > -1) {
        // display it
        filtered_locs.push(location);
      }
    });

    setLocs(filtered_locs);
  };
  return (
    <div className='from-input'>
      <label>
        <input
          value={fromValue}
          type='text'
          placeholder='From'
          spellCheck='false'
          onClick={(el) => el.target.setSelectionRange(0, 24)}
          onFocus={() => {
            document.querySelector(".from").style.display = "block";
            document.querySelector(".to").style.display = "none";
          }}
          onChange={filterLocations}
        />
        <span>{acronym}</span>
      </label>
      <Locations locations={locs} inputType='from' passInput={receiveInput} />
    </div>
  );
}

const planeIcon = (
  <svg
    className='plane-svg'
    width='682pt'
    height='682pt'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.179 7.275c.858-.858 2.218-.884 3.074-.028.856.856.83 2.216-.028 3.074l-5.413 5.413 2.688 12.68a2.154 2.154 0 0 1-.584 1.969l-1.079 1.079-5.668-11.085-5.804 5.804.63 3.271c.067.35-.044.712-.297.965l-1.144 1.144-2.646-4.969-4.969-2.646 1.144-1.144c.253-.253.614-.364.965-.296l3.271.629 15.86-15.86zM6.038 11.663l1.109-1.109a2.154 2.154 0 0 1 1.968-.584l10.531 2.227-4.242 4.242-9.366-4.776z'
      fill='#000'
      fill-rule='evenodd'
    />
  </svg>
);
const locationIcon = (
  <svg version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 512 512'>
    <g>
      <g>
        <path
          d='M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z'
        />
      </g>
    </g>
  </svg>
);

export const locations = [
  {
    full: (
      <>
        New York (all airports), <span>United States</span>
      </>
    ),
    acronym: "NYC",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Tenerife (all airports), <span>Spain</span>
      </>
    ),
    acronym: "TCI",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Paris (all airports), <span>France</span>
      </>
    ),
    acronym: "PAR",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Amsterdam (Schiphol), <span>Netherlands</span>
      </>
    ),
    acronym: "AMS",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Alicante, <span>Spain</span>
      </>
    ),
    acronym: "ALC",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Malaga, <span>Spain</span>
      </>
    ),
    acronym: "AGP",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Barcelona, <span>Spain</span>
      </>
    ),
    acronym: "BCN",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Edinburgh, <span>United Kingdom</span>
      </>
    ),
    acronym: "EDI",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Rome (all airports), <span>Italy</span>
      </>
    ),
    acronym: "ROM",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Dublin, Ireland, <span>Ireland, Republic Of</span>
      </>
    ),
    acronym: "DUB",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Faro, <span>Portugal</span>
      </>
    ),
    acronym: "FAO",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Prague (Ruzyne), <span>Czech Republic</span>
      </>
    ),
    acronym: "PRG",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Glasgow, <span>United Kingdom</span>
      </>
    ),
    acronym: "GLA",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Milan (all airports), <span>Italy</span>
      </>
    ),
    acronym: "MIL",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Madrid (Barajas), <span>Spain</span>
      </>
    ),
    acronym: "MAD",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Lanzarote, <span>Spain</span>
      </>
    ),
    acronym: "ACE",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Copenhagen, <span>Denmark</span>
      </>
    ),
    acronym: "CPH",
    icon: locationIcon,
  },
  {
    full: (
      <>
        Geneva (Geneve Cointrin), <span>Switzerland</span>
      </>
    ),
    acronym: "GVA",
    icon: locationIcon,
  },
  {
    full: (
      <>
        New York, John F Kennedy, <span>United States</span>
      </>
    ),
    acronym: "JFK",
    icon: planeIcon,
  },
  {
    full: (
      <>
        New York, Newark Liberty, <span>United States</span>
      </>
    ),
    acronym: "EWR",
    icon: planeIcon,
  },
  {
    full: (
      <>
        New York, La Guardia, <span>United States</span>
      </>
    ),
    acronym: "LGA",
    icon: planeIcon,
  },
  {
    full: (
      <>
        Buenos Aires, Jorge Newbery, <span>Argen</span>
      </>
    ),
    acronym: "AEP",
    icon: planeIcon,
  },
  {
    full: (
      <>
        Buenos Aires, Ministro Pistarini, <span>Argen</span>
      </>
    ),
    acronym: "EZE",
    icon: planeIcon,
  },
  {
    full: (
      <>
        Paris, Charles De Gaulle, <span>France</span>
      </>
    ),
    acronym: "CDG",
    icon: planeIcon,
  },
  {
    full: (
      <>
        Malta, (Luqa), <span>Malta</span>
      </>
    ),
    acronym: "MLA",
    icon: locationIcon,
  },
];
