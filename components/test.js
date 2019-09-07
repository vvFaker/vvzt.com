import React, { useState, useRef, useEffect } from 'react';

import { Engine, Render, World, Bodies, MouseConstraint } from 'matter-js';



export default function() {
    const [worldNode, setWorldNode] = useRef(null);
    const [engine, setEngine] = useState(null);
    const [render, setRender] = useState(null);
    useEffect(() => {
        const bodies = [
            Bodies.rectangle(200, 100, 50, 50), // 矩形
            Bodies.circle(300, 100, 25), // 圆
            Bodies.polygon(450, 100, 5, 25), // 多边形
            Bodies.trapezoid(590, 100, 50, 50, 3) // 梯形
        ];
        const _engine = Engine.create();
        const _render = Render.create({
            element: document.body,
            engine: _engine,
            options: {
                // wireframes : false
            }
        });
        setEngine(_engine);
        setRender(_render);
        World.add(_engine.world, [...bodies]);

        // 墙壁
        const offset = -10;
        World.add(_engine.world, [
            Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
            Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
            Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
        ]);

        // 鼠标约束
        const mouseConstraint = MouseConstraint.create(_engine, {
            element: _render.canvas
        });
        World.add(_engine.world, mouseConstraint);

        Engine.run(_engine);
        Render.run(_render);

        return () => {
            cleanup
        };
    }, [0]);
    return (
        <div id='world' ref={worldNode}></div>
    )
}