import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Scan, Activity, Cpu, ShieldCheck } from 'lucide-react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const GlowingWireframeTooth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMode, setActiveMode] = useState<'diagnostic' | 'biomimetic' | 'thermal'>('diagnostic');
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0.15, y: 0.4 });
  const mouseState = useRef({ isDown: false, lastX: 0, lastY: 0 });
  const animFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 440);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 440);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    // Generate 3D Tooth Geometry (Crown, Cervical Collar, and Dual Roots)
    const vertices: Point3D[] = [];
    const edges: [number, number][] = [];
    const innerPulpVertices: Point3D[] = [];
    const innerPulpEdges: [number, number][] = [];

    // --- 1. Occlusal Crown Surface (Top Molar Cusps) ---
    const crownRings = [
      { y: -110, count: 8, radiusX: 52, radiusZ: 44, bump: 12 }, // Cusps
      { y: -80, count: 12, radiusX: 72, radiusZ: 62, bump: 6 },  // Upper Crown
      { y: -45, count: 12, radiusX: 78, radiusZ: 68, bump: 2 },  // Maximum bulbous contour
      { y: -10, count: 10, radiusX: 68, radiusZ: 58, bump: 0 },  // Mid Crown
      { y: 25, count: 8, radiusX: 54, radiusZ: 46, bump: -2 },   // Cervical Margin (Neck)
    ];

    let vOffset = 0;
    const ringOffsets: number[] = [];

    crownRings.forEach((ring) => {
      ringOffsets.push(vOffset);
      for (let i = 0; i < ring.count; i++) {
        const theta = (i / ring.count) * Math.PI * 2;
        // Add cusp undulations (4 cusps)
        const cuspWave = Math.cos(theta * 4) * ring.bump;
        const rx = ring.radiusX + cuspWave;
        const rz = ring.radiusZ + cuspWave;
        vertices.push({
          x: Math.cos(theta) * rx,
          y: ring.y + (Math.sin(theta * 2) * 4),
          z: Math.sin(theta) * rz,
        });
      }
      // Connect vertices within the ring
      for (let i = 0; i < ring.count; i++) {
        edges.push([vOffset + i, vOffset + ((i + 1) % ring.count)]);
      }
      vOffset += ring.count;
    });

    // Central crown fissure apexes
    const centerApexIdx = vertices.length;
    vertices.push({ x: 0, y: -98, z: 0 });
    for (let i = 0; i < crownRings[0].count; i++) {
      edges.push([centerApexIdx, i]);
    }

    // Connect vertical ring struts
    for (let r = 0; r < crownRings.length - 1; r++) {
      const currStart = ringOffsets[r];
      const currCount = crownRings[r].count;
      const nextStart = ringOffsets[r + 1];
      const nextCount = crownRings[r + 1].count;
      for (let i = 0; i < currCount; i++) {
        const nextIdx = Math.floor((i / currCount) * nextCount);
        edges.push([currStart + i, nextStart + nextIdx]);
        // Diagonal cross-brace for tech geodesic feel
        edges.push([currStart + i, nextStart + ((nextIdx + 1) % nextCount)]);
      }
    }

    // --- 2. Roots (Mesial and Distal Roots) ---
    const neckStartIndex = ringOffsets[crownRings.length - 1];
    const neckCount = crownRings[crownRings.length - 1].count;

    // Root 1 (Mesial Root)
    const root1ApexIdx = vertices.length;
    const r1Steps = [
      { y: 60, rx: 24, rz: 22, offsetX: -24, offsetZ: -4 },
      { y: 95, rx: 18, rz: 16, offsetX: -32, offsetZ: -6 },
      { y: 130, rx: 11, rz: 10, offsetX: -38, offsetZ: -8 },
      { y: 155, rx: 4, rz: 4, offsetX: -42, offsetZ: -10 }
    ];

    let r1PrevStart = neckStartIndex;
    let r1PrevCount = Math.floor(neckCount / 2);

    r1Steps.forEach((step) => {
      const stepStart = vertices.length;
      const count = 6;
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        vertices.push({
          x: step.offsetX + Math.cos(theta) * step.rx,
          y: step.y,
          z: step.offsetZ + Math.sin(theta) * step.rz
        });
        edges.push([stepStart + i, stepStart + ((i + 1) % count)]);
      }
      // Connect to previous
      for (let i = 0; i < count; i++) {
        const prevIdx = r1PrevStart + (i % r1PrevCount);
        edges.push([stepStart + i, prevIdx]);
      }
      r1PrevStart = stepStart;
      r1PrevCount = count;
    });

    // Root 2 (Distal Root)
    const r2Steps = [
      { y: 60, rx: 24, rz: 22, offsetX: 24, offsetZ: 4 },
      { y: 95, rx: 18, rz: 16, offsetX: 32, offsetZ: 6 },
      { y: 130, rx: 11, rz: 10, offsetX: 38, offsetZ: 8 },
      { y: 155, rx: 4, rz: 4, offsetX: 42, offsetZ: 10 }
    ];

    let r2PrevStart = neckStartIndex + Math.floor(neckCount / 2);
    let r2PrevCount = Math.floor(neckCount / 2);

    r2Steps.forEach((step) => {
      const stepStart = vertices.length;
      const count = 6;
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2;
        vertices.push({
          x: step.offsetX + Math.cos(theta) * step.rx,
          y: step.y,
          z: step.offsetZ + Math.sin(theta) * step.rz
        });
        edges.push([stepStart + i, stepStart + ((i + 1) % count)]);
      }
      // Connect to previous
      for (let i = 0; i < count; i++) {
        const prevIdx = r2PrevStart + (i % r2PrevCount);
        edges.push([stepStart + i, prevIdx]);
      }
      r2PrevStart = stepStart;
      r2PrevCount = count;
    });

    // --- 3. Inner Golden Pulp Core Nerve Wireframe ---
    const pulpNodes: Point3D[] = [
      { x: 0, y: -65, z: 0 },
      { x: -18, y: -72, z: -6 },
      { x: 18, y: -72, z: 6 },
      { x: 0, y: -20, z: 0 },
      { x: -20, y: 35, z: -4 },
      { x: -32, y: 90, z: -6 },
      { x: -39, y: 145, z: -9 },
      { x: 20, y: 35, z: 4 },
      { x: 32, y: 90, z: 6 },
      { x: 39, y: 145, z: 9 },
    ];
    pulpNodes.forEach(p => innerPulpVertices.push(p));
    innerPulpEdges.push([0, 1], [0, 2], [0, 3], [3, 4], [4, 5], [5, 6], [3, 7], [7, 8], [8, 9]);

    // Floating particles around the tooth
    const particles: { x: number; y: number; z: number; speed: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 260,
        y: (Math.random() - 0.5) * 320,
        z: (Math.random() - 0.5) * 260,
        speed: 0.3 + Math.random() * 0.7,
        size: 1 + Math.random() * 2,
        alpha: 0.2 + Math.random() * 0.6
      });
    }

    let rotX = 0.15;
    let rotY = 0;
    let scanY = -120;
    let scanDir = 1.2;
    let time = 0;

    const render = () => {
      time += 0.02;
      if (!mouseState.current.isDown) {
        rotY += 0.007;
        rotX = 0.12 + Math.sin(time * 0.6) * 0.06;
      }

      scanY += scanDir;
      if (scanY > 165) scanDir = -1.2;
      if (scanY < -125) scanDir = 1.2;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2 - 10;
      const fov = 380;

      // Project 3D Point to 2D Screen
      const project = (p: Point3D): { x: number; y: number; z: number; scale: number } => {
        // Rotate around Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate around X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const distance = fov + z2;
        const scale = fov / Math.max(distance, 50);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale
        };
      };

      // --- Draw Ambient Tech Glow behind Model ---
      const radialGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.45);
      radialGrad.addColorStop(0, 'rgba(0, 240, 255, 0.12)');
      radialGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.04)');
      radialGrad.addColorStop(1, 'rgba(5, 7, 11, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // --- Draw Animated Concentric HUD Target Rings ---
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(cx, cy, 170, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(cx, cy, 195, time * 0.4, time * 0.4 + Math.PI * 1.5);
      ctx.stroke();
      ctx.restore();

      // --- Draw Floating Background Particles ---
      particles.forEach((pt) => {
        pt.y -= pt.speed;
        if (pt.y < -160) pt.y = 160;
        const proj = project(pt);
        const pAlpha = pt.alpha * (proj.scale * 0.8);
        ctx.fillStyle = activeMode === 'thermal' 
          ? `rgba(245, 158, 11, ${pAlpha})` 
          : `rgba(0, 240, 255, ${pAlpha})`;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, pt.size * proj.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Project all vertices
      const projected = vertices.map(project);
      const projectedPulp = innerPulpVertices.map(project);

      // --- Draw Enamel Wireframe Mesh Edges ---
      edges.forEach(([i1, i2]) => {
        const p1 = projected[i1];
        const p2 = projected[i2];
        if (!p1 || !p2) return;

        const avgZ = (p1.z + p2.z) / 2;
        const depthAlpha = Math.max(0.1, Math.min(0.85, (avgZ + 120) / 240));

        // Highlight line if near scanning laser beam
        const origY = (vertices[i1].y + vertices[i2].y) / 2;
        const distToScan = Math.abs(origY - scanY);
        const isScanned = distToScan < 24;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (isScanned) {
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.95 - (distToScan / 24) * 0.4})`;
          ctx.lineWidth = 2.2;
          ctx.shadowColor = '#00F0FF';
          ctx.shadowBlur = 8;
        } else if (activeMode === 'thermal') {
          ctx.strokeStyle = `rgba(251, 146, 60, ${depthAlpha * 0.75})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        } else {
          ctx.strokeStyle = `rgba(0, 240, 255, ${depthAlpha * 0.55})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
      });

      // --- Draw Inner Gold Pulp Chamber Nerve Pathways ---
      innerPulpEdges.forEach(([i1, i2]) => {
        const p1 = projectedPulp[i1];
        const p2 = projectedPulp[i2];
        if (!p1 || !p2) return;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.85)';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // --- Draw Nodes / Vertex points ---
      projected.forEach((p, i) => {
        const origY = vertices[i].y;
        const isScanned = Math.abs(origY - scanY) < 18;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, isScanned ? 2.8 : 1.6, 0, Math.PI * 2);
        if (isScanned) {
          ctx.fillStyle = '#00F0FF';
          ctx.shadowColor = '#00F0FF';
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      // --- Draw Laser Scanning Beam ---
      const scanProj = project({ x: 0, y: scanY, z: 0 });
      ctx.save();
      const laserGrad = ctx.createLinearGradient(cx - 150, scanProj.y, cx + 150, scanProj.y);
      laserGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
      laserGrad.addColorStop(0.2, 'rgba(0, 240, 255, 0.3)');
      laserGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.95)');
      laserGrad.addColorStop(0.8, 'rgba(0, 240, 255, 0.3)');
      laserGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');

      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.moveTo(cx - 150, scanProj.y);
      ctx.lineTo(cx + 150, scanProj.y);
      ctx.stroke();

      // Scan HUD label
      ctx.font = '10px "Space Grotesk", monospace';
      ctx.fillStyle = '#00F0FF';
      ctx.fillText(`SCAN AXIS [${(scanY + 120).toFixed(0)}μm]`, cx + 85, scanProj.y - 6);
      ctx.restore();

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId.current);
    };
  }, [activeMode]);

  // Handle Drag / Touch Rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseState.current.isDown = true;
    mouseState.current.lastX = e.clientX;
    mouseState.current.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseState.current.isDown) return;
    const dx = e.clientX - mouseState.current.lastX;
    const dy = e.clientY - mouseState.current.lastY;
    mouseState.current.lastX = e.clientX;
    mouseState.current.lastY = e.clientY;
    setRotation(prev => ({
      x: prev.x + dy * 0.008,
      y: prev.y + dx * 0.008
    }));
  };

  const handleMouseUp = () => {
    mouseState.current.isDown = false;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden glass-panel-glow flex flex-col justify-between p-4 sm:p-6 select-none cursor-grab active:cursor-grabbing border border-cyan-500/30"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-cyan-300">
            3D Biometric Holo-Mesh • v4.8
          </span>
        </div>
        <div className="flex items-center gap-2 bg-[#080D18]/90 border border-cyan-500/30 px-3 py-1 rounded-full text-[10px] font-mono-tech text-amber-400">
          <Activity className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>REAL-TIME TELEMETRY</span>
        </div>
      </div>

      {/* Main 3D Canvas Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Live HUD Floating Diagnostics Data Badges */}
      <div className="relative z-10 grid grid-cols-2 gap-2 max-w-xs pointer-events-none">
        <div className="glass-panel p-2.5 rounded-xl border border-white/10 text-[11px] font-mono-tech space-y-0.5 backdrop-blur-md">
          <span className="text-slate-400 text-[9px] uppercase tracking-wider block">Precision Focus</span>
          <span className="text-cyan-300 font-bold text-xs">0.02mm Sub-Micron</span>
        </div>
        <div className="glass-panel p-2.5 rounded-xl border border-white/10 text-[11px] font-mono-tech space-y-0.5 backdrop-blur-md">
          <span className="text-slate-400 text-[9px] uppercase tracking-wider block">Biological Enamel</span>
          <span className="text-amber-400 font-bold text-xs">99.8% Preserved</span>
        </div>
      </div>

      {/* Bottom Interactive Mode Toggle Tabs */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 bg-[#070B14]/80 backdrop-blur-md -mx-2 -mb-2 p-3 rounded-2xl">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveMode('diagnostic')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'diagnostic'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            Diagnostic Scan
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('biomimetic')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'biomimetic'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            Pulp Nerve Core
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('thermal')}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'thermal'
                ? 'bg-orange-500/20 text-orange-300 border border-orange-400/50 shadow-[0_0_12px_rgba(251,146,60,0.3)]'
                : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            37°C Mist Mode
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono-tech text-slate-400">
          <Scan className="w-3 h-3 text-cyan-400" />
          <span>DRAG TO ROTATE 360°</span>
        </div>
      </div>
    </div>
  );
};
