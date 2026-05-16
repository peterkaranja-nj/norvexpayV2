'use client'
import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const CITIES: { name: string; coords: [number, number] }[] = [
  { name: 'New York',  coords: [-74.0,  40.7] },
  { name: 'London',    coords: [ -0.1,  51.5] },
  { name: 'Lagos',     coords: [  3.4,   6.5] },
  { name: 'Nairobi',   coords: [ 36.8,  -1.3] },
  { name: 'Dubai',     coords: [ 55.3,  25.2] },
  { name: 'Mumbai',    coords: [ 72.9,  19.1] },
  { name: 'Singapore', coords: [103.8,   1.4] },
  { name: 'Tokyo',     coords: [139.7,  35.7] },
  { name: 'Sydney',    coords: [151.2, -33.9] },
  { name: 'São Paulo', coords: [-46.6, -23.5] },
  { name: 'Toronto',   coords: [-79.4,  43.7] },
  { name: 'Paris',     coords: [  2.4,  48.9] },
]

const ROUTES: { a: number; b: number; color: string }[] = [
  { a: 0,  b: 1,  color: 'rgba(59,130,246,0.5)'  },
  { a: 1,  b: 2,  color: 'rgba(34,197,94,0.5)'   },
  { a: 2,  b: 3,  color: 'rgba(34,197,94,0.5)'   },
  { a: 3,  b: 4,  color: 'rgba(232,160,32,0.5)'  },
  { a: 4,  b: 5,  color: 'rgba(232,160,32,0.5)'  },
  { a: 5,  b: 6,  color: 'rgba(6,182,212,0.5)'   },
  { a: 6,  b: 7,  color: 'rgba(6,182,212,0.5)'   },
  { a: 7,  b: 8,  color: 'rgba(168,85,247,0.5)'  },
  { a: 0,  b: 9,  color: 'rgba(59,130,246,0.5)'  },
  { a: 1,  b: 10, color: 'rgba(59,130,246,0.4)'  },
  { a: 1,  b: 11, color: 'rgba(239,68,68,0.45)'  },
  { a: 0,  b: 4,  color: 'rgba(232,160,32,0.4)'  },
  { a: 1,  b: 3,  color: 'rgba(34,197,94,0.4)'   },
  { a: 6,  b: 8,  color: 'rgba(168,85,247,0.4)'  },
  { a: 2,  b: 4,  color: 'rgba(239,68,68,0.4)'   },
]

export default function WorldMap() {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPulse(p => (p + 1) % CITIES.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative w-full select-none" style={{ height: '390px' }}>
      <ComposableMap
        projectionConfig={{ scale: 155, center: [15, 5] }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--muted)"
                fillOpacity={0.15}
                stroke="var(--muted)"
                strokeOpacity={0.25}
                strokeWidth={0.4}
                style={{
                  default: { outline: 'none' },
                  hover:   { outline: 'none', fillOpacity: 0.25 },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {ROUTES.map(({ a, b, color }, i) => (
          <Line
            key={i}
            from={CITIES[a].coords}
            to={CITIES[b].coords}
            stroke={color}
            strokeWidth={0.8}
            strokeDasharray="3 5"
          />
        ))}

        {CITIES.map((city, i) => (
          <Marker key={city.name} coordinates={city.coords}>
            {i === pulse && (
              <circle r={10} fill="none" stroke="#E8A020" strokeWidth={1} opacity={0.4}>
                <animate attributeName="r" values="5;13" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="1.2s" repeatCount="indefinite" />
              </circle>
            )}
            <circle
              r={i === pulse ? 4.5 : 2.8}
              fill={i === pulse ? '#E8A020' : 'rgba(232,160,32,0.55)'}
              style={{ transition: 'r 0.4s ease, fill 0.4s ease' }}
            />
            {i === pulse && (
              <text
                textAnchor="middle"
                y={-18}
                stroke="var(--bg-surface)"
                strokeWidth="3"
                paintOrder="stroke"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fill: '#E8A020', fontWeight: 700 }}
              >
                {city.name}
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>

      <div className="absolute bottom-2 left-2 text-xs" style={{ color: 'var(--accent)', fontFamily: 'Inter, system-ui, sans-serif' }}>
        40+ countries active
      </div>
    </div>
  )
}
