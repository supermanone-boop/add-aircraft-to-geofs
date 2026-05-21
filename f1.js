(() => {

    const ac = geofs.aircraft.instance;

    console.log("[MCL35M GLB] init");

    const GLB_URL =
        "https://raw.githubusercontent.com/supermanone-boop/models/main/f1_2021_mclaren_mcl35m.glb";

    // =========================
    // 元機体非表示
    // =========================
    function hideNative() {
        if (ac.parts?.root?.object3d) {
            ac.parts.root.object3d.visible = false;
        }
    }

    hideNative();

    // 再生成・カメラ対策
    setInterval(hideNative, 300);

    // =========================
    // GLB追加（addParts方式）
    // =========================
    ac.addParts([
        {
            name: "mcl35m",
            model: GLB_URL,

            position: [0, 0, 0.63],
            rotation: [0, 0, 270],

            // F1は小さいので少し拡大
            scale: [1.2, 1.2, 1.2]
        }
    ]);

    console.log("[MCL35M GLB] added");

})();