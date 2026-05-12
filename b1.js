'use strict';

(() => {

    const ac = geofs.aircraft.instance;

    console.log("[B52 GLB Merge] init");

    const GLB_URL =
        "https://raw.githubusercontent.com/supermanone-boop/models/main/b-1_lancer_final_version.glb";

    // -------------------------
    // ① 初期非表示
    // -------------------------
    function hideNative() {
        if (ac.parts?.root?.object3d) {
            ac.parts.root.object3d.visible = false;
        }
    }

    hideNative();

    // -------------------------
    // ② カメラ切替・再生成対策
    // -------------------------
    setInterval(hideNative, 300);

    // -------------------------
    // ③ GLB追加
    // -------------------------
    ac.addParts([
        {
            name: "b52_center",
            model: GLB_URL,
            rotation: [0, 0, 90],
            position: [0, 0, 0],
            scale: [1, 1, 1]
        }
    ]);

    console.log("[B52 GLB Merge] added");

})();