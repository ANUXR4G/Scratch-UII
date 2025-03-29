import * as Blockly from "blockly/core";

let blocksDefined = false;

export const defineCustomBlocks = () => {
  if (blocksDefined) return;
  Blockly.defineBlocksWithJsonArray([
    // Motion Blocks
    {
      type: "move_forward",
      message0: "move forward %1 steps",
      args0: [
        { type: "field_number", name: "STEPS", value: 10, check: "Number" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },
    {
      type: "turn_right",
      message0: "turn \u21BB %1 degrees",
      args0: [
        { type: "field_number", name: "DEGREES", value: 90, check: "Number" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },
    {
      type: "turn_left",
      message0: "turn \u21BA %1 degrees",

      args0: [
        { type: "field_number", name: "DEGREES", value: 90, check: "Number" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },
    {
      type: "random_postion",
      message0: "go to random position",
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },
    {
      type: "goto_position",
      message0: "go to x: %1 y: %2",
      args0: [
        {
          type: "field_number",
          name: "X",
          value: 0,
        },
        {
          type: "field_number",
          name: "Y",
          value: 0,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },

    {
      type: "goto_X",
      message0: "goto x: %1",
      args0: [{ type: "field_number", name: "X", value: 90, check: "Number" }],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },

    {
      type: "goto_Y",
      message0: "goto y: %1",
      args0: [{ type: "field_number", name: "Y", value: 90, check: "Number" }],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },

    {
      type: "glide_random",
      message0: "glide %1 secs to random position",
      args0: [
        { type: "field_number", name: "GLIDE", value: 1, check: "Number" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },

    {
      type: "glide_position",
      message0: "glide %1 secs to x: %2 and y:%3",
      args0: [
        {
          type: "field_number",
          name: "GLIDE",
          value: 1,
          check: "Number",
        },
        {
          type: "field_number",
          name: "X",
          value: 0,
          check: "Number",
        },
        {
          type: "field_number",
          name: "Y",
          value: 0,
          check: "Number",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
    },

    // Looks Blocks
    {
      type: "say_message_duration",
      message0: "say %1 for %2 seconds",
      args0: [
        { type: "field_input", name: "MESSAGE", text: "Hello!" },
        { type: "field_number", name: "DURATION", value: 1, min: 1 },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    {
      type: "say_message",
      message0: "say %1",
      args0: [{ type: "field_input", name: "MESSAGE", text: "Hello!" }],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    {
      type: "think_message_duration",
      message0: "think %1 for %2 seconds",
      args0: [
        { type: "field_input", name: "MESSAGE", text: "Hello!" },
        { type: "field_number", name: "DURATION", value: 1, min: 1 },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    {
      type: "think_message",
      message0: "think %1",
      args0: [{ type: "field_input", name: "MESSAGE", text: "Hello!" }],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    {
      type: "set_size",
      message0: "set size to %1",
      args0: [{ type: "field_number", name: "SIZE", value: 0 }],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    {
      type: "show_sprite",
      message0: "show",
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    {
      type: "hide_sprite",
      message0: "hide",
      previousStatement: null,
      nextStatement: null,
      colour: 160,
    },

    // Sound Blocks
    {
      type: "play_sound",
      message0: "play sound %1",
      args0: [
        {
          type: "field_dropdown",
          name: "SOUND",
          options: [
            ["Meow", "MEOW"],
            ["Bark", "BARK"],
          ],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 300,
      tooltip: "Play a selected sound",
    },

    {
      type: "set_volume",
      message0: "set volume to %1",
      args0: [{ type: "field_number", name: "VOLUME", value: 50, min: 0 }],
      previousStatement: null,
      nextStatement: null,
      colour: 300,
    },
    // Event Blocks
    {
      type: "run_clicked",
      message0: "when run button is clicked",
      nextStatement: null,
      colour: 45,
      hat: "cap",
    },

    {
      type: "key_pressed",
      message0: "when %1 key pressed",
      args0: [
        {
          type: "field_dropdown",
          name: "KEY",
          options: [
            ["space", " "],
            ["arrow up", "ArrowUp"],
            ["arrow down", "ArrowDown"],
            ["arrow left", "ArrowLeft"],
            ["arrow right", "ArrowRight"],
            ["any key", "ANY"],
          ],
        },
      ],
      nextStatement: null,
      colour: 45,
      tooltip: "Run code when a specific key is pressed",
      hat: "cap",
    },

    {
      type: "sprite_clicked",
      message0: "when sprite is clicked",
      nextStatement: null,
      colour: 45,
      hat: "cap",
    },

    // Control blocks
    {
      type: "wait_time",
      message0: "wait %1 seconds",
      args0: [{ type: "field_number", name: "WAIT", value: 1, min: 1 }],
      previousStatement: null,
      nextStatement: null,
      colour: 60,
    },
    {
      type: "repeat_loop",
      message0: "repeat %1 times",
      args0: [
        {
          type: "field_number",
          name: "TIMES",
          value: 5, // Default loop count
          min: 1, // Minimum value
        },
      ],
      message1: "do %1",
      args1: [
        {
          type: "input_statement",
          name: "DO",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 60,
      tooltip: "Repeat the actions a specified number of times",
      helpUrl: "",
    },

    {
      type: "if_condition",
      message0: "if %1",
      args0: [
        {
          type: "input_value",
          name: "CONDITION",
        },
      ],
      message1: "do %1",
      args1: [
        {
          type: "input_statement",
          name: "DO",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 60,
      tooltip: "Perform actions if the condition is true",
      helpUrl: "",
    },

    {
      type: "if_else_condition",
      message0: "if %1",
      args0: [
        {
          type: "input_value",
          name: "CONDITION",
        },
      ],
      message1: "do %1",
      args1: [
        {
          type: "input_statement",
          name: "DO",
        },
      ],
      message2: "else %1",
      args2: [
        {
          type: "input_statement",
          name: "ELSE",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 60,
      tooltip:
        "Perform actions if the condition is true, otherwise do something else",
      helpUrl: "",
    },

    {
      type: "repeat_until",
      message0: "repeat until %1",
      args0: [
        {
          type: "input_value",
          name: "CONDITION",
        },
      ],
      message1: "do %1",
      args1: [
        {
          type: "input_statement",
          name: "DO",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 60,
      tooltip: "Repeat the actions until the condition is true",
      helpUrl: "",
    },

    // Operators Blocks
    {
      type: "add_numbers",
      message0: "%1 + %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Number",
      colour: 120,
      tooltip: "Adds two numbers",
      helpUrl: "",
    },

    {
      type: "subtract_numbers",
      message0: "%1 - %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Number",
      colour: 120,
      tooltip: "Subtracts two numbers",
      helpUrl: "",
    },

    {
      type: "divide_numbers",
      message0: "%1 ÷ %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Number",
      colour: 120,
      tooltip: "Divides two numbers",
      helpUrl: "",
    },

    {
      type: "multiply_numbers",
      message0: "%1 * %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Number",
      colour: 120,
      tooltip: "Multiplies two numbers",
      helpUrl: "",
    },

    {
      type: "less_than",
      message0: "%1 < %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Boolean",
      colour: 120,
      tooltip:
        "Returns true if the first number is less than the second number",
      helpUrl: "",
    },

    {
      type: "greater_than",
      message0: "%1 > %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Boolean",
      colour: 120,
      tooltip:
        "Returns true if the first number is greater than the second number",
      helpUrl: "",
    },

    {
      type: "equal_to",
      message0: "%1 = %2",
      args0: [
        {
          type: "input_value",
          name: "A",
        },
        {
          type: "input_value",
          name: "B",
        },
      ],
      output: "Boolean",
      colour: 120,
      tooltip: "Returns true if both values are equal",
      helpUrl: "",
    },

    // Variable blocks
    {
      type: "set_variable",
      message0: "set %1 to %2",
      args0: [
        {
          type: "field_input",
          name: "VAR_NAME",
          text: "myVar",
        },
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Set a variable to a specific value",
      helpUrl: "",
    },

    {
      type: "use_variable",
      message0: "variable %1",
      args0: [
        {
          type: "field_input",
          name: "VAR_NAME",
          text: "myVar",
        },
      ],
      output: null,
      colour: 330,
      tooltip: "Use an existing variable",
      helpUrl: "",
    },

    {
      type: "internal_value",
      message0: "%1",
      args0: [
        {
          type: "field_input",
          name: "VALUE",
          text: "0", // Default value
        },
      ],
      output: null, // Allows it to connect to other blocks
      colour: 330,
      tooltip: "Enter a number or string",
      helpUrl: "",
    },

    //
  ]);
  blocksDefined = true;
};
