/* Edit your details here. */
const SITE={name:"George Kotelawala",initials:"GK",email:"g.kotelawala@ufl.edu"};

/* Organization timeline on the Work page. Entries show left to right in the order listed (oldest first).
   To add one, copy an entry, fill it in, and separate entries with commas.
   "kind" and "org" make the small label. "logo" is a square image in the images folder. */
const TIMELINE=[
{date:"August 2026 – Present",kind:"Rocket team",org:"Swamp Launch",title:"Payload Electronics Team Member",logo:"images/swamp-launch.png"},
{date:"August 2026 – Present",kind:"Student org",org:"SASE",title:"SASE Projects",logo:"images/sase.png"},
{date:"August 2026 – Present",kind:"Student org",org:"IEEE",title:"Open Project Space (OPS)",logo:"images/ieee.png"},
{date:"August 2026 – Present",kind:"Student org",org:"SHPE",title:"Journal Club",logo:"images/shpe.png"}
];

/* To add a project, copy one of the entries below into the list, fill it in, and separate entries with commas.
   "sort" controls the order (year-month). "image" is the small picture in the list.
   "gallery" holds the larger pictures shown on the project page. */
const PROJECTS=[
{slug:"flight-computer",title:"Flight Computer Schematic",category:"Aerospace",group:"Swamp Launch Avionics",
 date:"Fall 2026",sort:"2026-10",image:"images/flight-thumb.png",
 summary:"My second project: a schematic that connects an IMU and a pressure sensor to a microcontroller.",
 overview:"After my first board, I took on a bigger design: a rocket flight computer schematic with a microcontroller, an IMU, a pressure sensor, and its own power supply.",
 role:"Schematic design and component selection",
 outcome:"A finished KiCAD schematic. The assignment covered the schematic only, so I did not lay out a board.",
 gallery:[{src:"images/flight-schematic.png",caption:"Flight computer schematic in KiCAD"}],
 notes:[
  "This was the Swamp Launch avionics new member project. The goal was to learn how to choose parts and wire them correctly for a high-power rocket.",
  "I chose a Texas Instruments MSPM0G3507 microcontroller, a Bosch BMI088 IMU for acceleration and rotation, and a Bosch BMP390 pressure sensor for altitude.",
  "A buck converter (MP2359) steps a 14.8 V input down to 3.3 V for the microcontroller and both sensors. The input passes through a fuse, a P-channel MOSFET, and a ferrite bead.",
  "I added the supporting parts each chip needs, including decoupling capacitors, a reset resistor and capacitor, and the microcontroller’s core and reference capacitors.",
  "I split the schematic into four labeled blocks (power, microcontroller, IMU, and pressure sensor) to keep it readable."]},
{slug:"linear-step-down-converter",title:"Linear Step-Down Converter",category:"Electronics",group:"Swamp Launch Payload Electronics",
 date:"Fall 2026",sort:"2026-09",image:"images/linear-thumb.png",
 summary:"My first project: a simple board that steps a higher voltage down to a steady 5 V.",
 overview:"This was my first PCB design. I kept the circuit simple on purpose so I could focus on learning the full KiCAD workflow, from schematic to routed board.",
 role:"Schematic and PCB layout",
 outcome:"A finished schematic and a routed PCB layout, completed as a learning exercise.",
 gallery:[{src:"images/linear-schematic.png",caption:"Schematic in KiCAD"},{src:"images/linear-pcb.png",caption:"PCB layout in KiCAD"}],
 notes:[
  "I started this as the Swamp Launch payload team’s new member project, and it was the first circuit board I designed.",
  "The board is built around an LD1117S50 linear regulator, which gives a fixed 5 V output from a higher input voltage.",
  "I added a 1N5818 diode in series with the input and decoupling capacitors on both sides of the regulator.",
  "Power comes in and goes out through 3.5 mm terminal blocks, labeled VCC, 5V, and GND on the board.",
  "I kept it simple on purpose. The point was to learn how to place parts, route traces, and label power and ground before moving on to harder designs."]}
];
