import React, { useEffect, useRef } from "react";

export default function WaveBackground() {
    const canvasRef = useRef(null);
    const waves = useRef([]);

    class Wave {
        constructor(width, height, color, speed, amplitude, wavelength) {
            this.width = width;
            this.height = height;

            this.color = color;
            this.speed = speed;

            this.amplitude = amplitude;
            this.wavelength = wavelength;

            this.offset = Math.random() * 1000;
            this.y = height * (0.3 + Math.random() * 0.4);
        }

        update() {
            this.offset += this.speed;
        }

        draw(ctx) {
            ctx.beginPath();

            for (let x = 0; x <= this.width; x += 5) {
                const y =
                    this.y +
                    Math.sin((x + this.offset) / this.wavelength) *
                    this.amplitude;

                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = this.color;
            ctx.lineWidth = 3;

            ctx.shadowBlur = 20;
            ctx.shadowColor = this.color;

            ctx.stroke();

            ctx.shadowBlur = 0;
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            waves.current = [
                new Wave(canvas.width, canvas.height, "#00d4ff", 0.6, 40, 180),
                new Wave(canvas.width, canvas.height, "#ff00c8", 0.4, 30, 220),
                new Wave(canvas.width, canvas.height, "#0080ff", 0.5, 35, 200),
            ];
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#020617"; // dark background
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            waves.current.forEach((wave) => {
                wave.update();
                wave.draw(ctx);
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}