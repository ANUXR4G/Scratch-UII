import { javascriptGenerator } from "blockly/javascript";

// Define JavaScript generators for custom blocks
export const defineJsGenerators = () => {
  // Motion code generation
  javascriptGenerator.forBlock["move_forward"] = (block) => {
    const steps = block.getFieldValue("STEPS");
    return `moveForward(${steps});\n`;
  };

  javascriptGenerator.forBlock["turn_right"] = (block) => {
    const degrees = block.getFieldValue("DEGREES") || 0;
    return `turnRight(${degrees});\n`;
  };

  javascriptGenerator.forBlock["turn_left"] = (block) => {
    const degrees = block.getFieldValue("DEGREES") || 0;
    return `turnLeft(${degrees});\n`;
  };

  javascriptGenerator.forBlock["random_postion"] = (block) => {
    return `randomPosition();\n`;
  };

  javascriptGenerator.forBlock["goto_position"] = (block) => {
    const x = block.getFieldValue("X");
    const y = block.getFieldValue("Y");
    return `moveTo(${x}, ${y});\n`;
  };

  javascriptGenerator.forBlock["goto_X"] = (block) => {
    const x = block.getFieldValue("X");
    return `gotoX(${x});\n`;
  };

  javascriptGenerator.forBlock["goto_Y"] = (block) => {
    const y = block.getFieldValue("Y");
    return `gotoY(${y});\n`;
  };

  javascriptGenerator.forBlock["glide_random"] = (block) => {
    const randomX = Math.floor(Math.random() * 500);
    const randomY = Math.floor(Math.random() * 500);

    const glideTime = block.getFieldValue("GLIDE");

    return `glideRandom(${glideTime});\n`;
  };

  javascriptGenerator.forBlock["glide_position"] = (block) => {
    const glideTime = block.getFieldValue("GLIDE");
    const x = block.getFieldValue("X");
    const y = block.getFieldValue("Y");

    return `glidePosition(${glideTime},${x},${y});\n`;
  };

  // Looks code generations
  javascriptGenerator.forBlock["say_message_duration"] = (block) => {
    const message = block.getFieldValue("MESSAGE");
    const duration = block.getFieldValue("DURATION") || 1;
    return `sayForDuration("${message}", ${duration});\n`;
  };

  javascriptGenerator.forBlock["say_message"] = (block) => {
    const message = block.getFieldValue("MESSAGE");
    return `say("${message}");\n`;
  };

  javascriptGenerator.forBlock["think_message_duration"] = (block) => {
    const message = block.getFieldValue("MESSAGE");
    const duration = block.getFieldValue("DURATION") || 1;
    return `thinkForDuration("${message}", ${duration});\n`;
  };

  javascriptGenerator.forBlock["think_message"] = (block) => {
    const message = block.getFieldValue("MESSAGE");
    return `think("${message}");\n`;
  };

  javascriptGenerator.forBlock["set_size"] = (block) => {
    const size = block.getFieldValue("SIZE");
    return `size(${size});\n`;
  };

  javascriptGenerator.forBlock["show_sprite"] = (block) => {
    return `show();\n`;
  };

  javascriptGenerator.forBlock["hide_sprite"] = (block) => {
    return `hide();\n`;
  };

  // Sound code generation
  javascriptGenerator.forBlock["play_sound"] = (block) => {
    const sound = block.getFieldValue("SOUND");
    return `playSound("${sound}");\n`;
  };

  javascriptGenerator.forBlock["set_volume"] = (block) => {
    const volume = block.getFieldValue("VOLUME");
    return `setVolume(${volume});\n`;
  };

  // Event code generation
  javascriptGenerator.forBlock["run_clicked"] = (block) => {
    // return `run();\n`;
    return "onRunClicked();\n";
  };

  javascriptGenerator.forBlock["key_pressed"] = (block) => {
    const key = block.getFieldValue("KEY");
    // return `
    // document.addEventListener('keydown', (event) => {
    //   if (event.key === "${key}" || "${key}" === "ANY") {
    //     run();
    //     }
    //     });
    //     `;
    return `onKeyPressed("${key}");\n`;
  };

  javascriptGenerator.forBlock["sprite_clicked"] = (block) => {
    return "onSpriteClicked();\n";
  };

  // Control code generation
  javascriptGenerator.forBlock["wait_time"] = (block) => {
    const time = block.getFieldValue("WAIT");
    return `wait(${time});\n`;
  };

  javascriptGenerator.forBlock["repeat_loop"] = (block) => {
    const times = block.getFieldValue("TIMES") || 0;
    const statements = javascriptGenerator.statementToCode(block, "DO");
    return `for (let i = 0; i < ${times}; i++) {\n${statements}}\n`;
  };

  javascriptGenerator.forBlock["if_condition"] = (block) => {
    const condition =
      javascriptGenerator.valueToCode(
        block,
        "CONDITION",
        javascriptGenerator.ORDER_NONE
      ) || "false";
    const statements = javascriptGenerator.statementToCode(block, "DO");
    return `if (${condition}) {\n${statements}}\n`;
  };

  javascriptGenerator.forBlock["if_else_condition"] = (block) => {
    const condition =
      javascriptGenerator.valueToCode(
        block,
        "CONDITION",
        javascriptGenerator.ORDER_NONE
      ) || "false";
    const doBranch = javascriptGenerator.statementToCode(block, "DO");
    const elseBranch = javascriptGenerator.statementToCode(block, "ELSE");

    return `if (${condition}) {\n${doBranch}} else {\n${elseBranch}}\n`;
  };

  javascriptGenerator.forBlock["repeat_until"] = (block) => {
    const condition =
      javascriptGenerator.valueToCode(
        block,
        "CONDITION",
        javascriptGenerator.ORDER_NONE
      ) || "false";
    const doBranch = javascriptGenerator.statementToCode(block, "DO");

    return `while (!(${condition})) {\n${doBranch}}\n`;
  };

  // Operator code generation
  javascriptGenerator.forBlock["add_numbers"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_ADDITION
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_ADDITION
      ) || "0";

    return [`(${a} + ${b})`, javascriptGenerator.ORDER_ADDITION];
  };

  javascriptGenerator.forBlock["subtract_numbers"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_SUBTRACTION
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_SUBTRACTION
      ) || "0";

    return [`(${a} - ${b})`, javascriptGenerator.ORDER_SUBTRACTION];
  };

  javascriptGenerator.forBlock["divide_numbers"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_DIVISION
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_DIVISION
      ) || "1";

    return [`(${a} / ${b})`, javascriptGenerator.ORDER_DIVISION];
  };

  javascriptGenerator.forBlock["multiply_numbers"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_MULTIPLICATION
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_MULTIPLICATION
      ) || "0";

    return [`(${a} * ${b})`, javascriptGenerator.ORDER_MULTIPLICATION];
  };

  javascriptGenerator.forBlock["less_than"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_RELATIONAL
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_RELATIONAL
      ) || "0";

    return [`(${a} < ${b})`, javascriptGenerator.ORDER_RELATIONAL];
  };

  javascriptGenerator.forBlock["greater_than"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_RELATIONAL
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_RELATIONAL
      ) || "0";

    return [`(${a} > ${b})`, javascriptGenerator.ORDER_RELATIONAL];
  };

  javascriptGenerator.forBlock["equal_to"] = (block) => {
    const a =
      javascriptGenerator.valueToCode(
        block,
        "A",
        javascriptGenerator.ORDER_EQUALITY
      ) || "0";
    const b =
      javascriptGenerator.valueToCode(
        block,
        "B",
        javascriptGenerator.ORDER_EQUALITY
      ) || "0";

    return [`(${a} == ${b})`, javascriptGenerator.ORDER_EQUALITY];
  };

  // Variable code generation
  javascriptGenerator.forBlock["set_variable"] = (block) => {
    const varName = block.getFieldValue("VAR_NAME") || "myVar";
    const value =
      javascriptGenerator.valueToCode(
        block,
        "VALUE",
        javascriptGenerator.ORDER_ASSIGNMENT
      ) || "0";

    return `let ${varName} = ${value};\n`;
  };

  javascriptGenerator.forBlock["use_variable"] = (block) => {
    const varName = block.getFieldValue("VAR_NAME");
    return [varName, javascriptGenerator.ORDER_ATOMIC];
  };

  javascriptGenerator.forBlock["internal_value"] = (block) => {
    const value = block.getFieldValue("VALUE");
    return [`${value}`, javascriptGenerator.ORDER_ATOMIC];
  };

  //
};
