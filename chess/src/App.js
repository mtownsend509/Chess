import logo from './logo.svg';
import './App.css';
import {Pawn, Piece} from './Pieces';
import React, {useState} from 'react'

let bP = new Pawn('black');
let wP = new Pawn ('white'); 
console.log(bP.backgroundImage)

const [Board, setBoard] = [['R','K',,,,,,],
            [bP,'bP','bP','bP','bP','bP','bP','bP'],
            [,,,,,,,],
            [,,,,,,,],
            [,,,,,,,],
            [,,,,,,,],
            ['wP','wP','wP','wP','wP','wP','wP','wP'],
            [,,,,,,,]]

            let Butt = () => {
              console.log('butt')
            }

function App() {
  return (
    <div id = 'board'>
      <div class = 'row' id ='8'>
        <div class = 'square' id = 'a8'>
          
        </div>
        <div class = 'square' id = 'b8' style = {{
          backgroundColor: 'brown'
        }}>
          
        </div>
        <div class = 'square' id = 'c8'>
        </div>
        <div class = 'square' id = 'd8' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'e8'>
        </div>
        <div class = 'square' id = 'f8' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'g8'>
        </div>
        <div class = 'square' id = 'h8' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        
      </div>

      <div class = 'row' id ='7'>

        <div class = 'square' id = 'a7' style = {{
          backgroundColor: 'brown'
        }}>
          <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          onClick = {() => {console.log(bP)}}
          ></div>
        </div>
        <div class = 'square' id = 'b7'>
        <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        <div class = 'square' id = 'c7' style = {{
          backgroundColor: 'brown'
        }}>
          <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        <div class = 'square' id = 'd7'>
        <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        <div class = 'square' id = 'e7' style = {{
          backgroundColor: 'brown'
        }}>
          <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        <div class = 'square' id = 'f7'>
        <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        <div class = 'square' id = 'g7' style = {{
          backgroundColor: 'brown'
        }}>
          <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        <div class = 'square' id = 'h7'>
        <div style = {{
            backgroundImage: `url(${bP.backgroundImage})`,
            height: '80px', width: '80px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
        </div>
        
      </div>

      <div class = 'row' id ='6'>

        <div class = 'square' id = 'a6'>
        </div>
        <div class = 'square' id = 'b6' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'c6'>
        </div>
        <div class = 'square' id = 'd6' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'e6'>
        </div>
        <div class = 'square' id = 'f6' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'g6'>
        </div>
        <div class = 'square' id = 'h6' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        
      </div>

      <div class = 'row' id ='5'>

        <div class = 'square' id = 'a5' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'b5'>
        </div>
        <div class = 'square' id = 'c5' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'd5'>
        </div>
        <div class = 'square' id = 'e5' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'f5'>
        </div>
        <div class = 'square' id = 'g5' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'h5' >
        </div>
        
      </div>

      <div class = 'row' id ='4'>

        <div class = 'square' id = 'a4'>
        </div>
        <div class = 'square' id = 'b4' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'c4'>
        </div>
        <div class = 'square' id = 'd4' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'e4'>
        </div>
        <div class = 'square' id = 'f4' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'g4'>
        </div>
        <div class = 'square' id = 'h4' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        
      </div>

      <div class = 'row' id ='3'>

        <div class = 'square' id = 'a3' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'b3'>
        </div>
        <div class = 'square' id = 'c3' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'd3'>
        </div>
        <div class = 'square' id = 'e3' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'f3'>
        </div>
        <div class = 'square' id = 'g3' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'h3'>
        </div>
        
      </div>

      <div class = 'row' id ='2'>

        <div class = 'square' id = 'a2'>
        </div>
        <div class = 'square' id = 'b2' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'c2'>
        </div>
        <div class = 'square' id = 'd2' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'e2'>
        </div>
        <div class = 'square' id = 'f2' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'g2'>
        </div>
        <div class = 'square' id = 'h2' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        
      </div>

      <div class = 'row' id ='1'>

        <div class = 'square' id = 'a1' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'b1'>
        </div>
        <div class = 'square' id = 'c1' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'd1'>
        </div>
        <div class = 'square' id = 'e1' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'f1'>
        </div>
        <div class = 'square' id = 'g1' style = {{
          backgroundColor: 'brown'
        }}>
        </div>
        <div class = 'square' id = 'h1'>
        </div>
        
      </div>
    </div>
  );
}

export default App;
