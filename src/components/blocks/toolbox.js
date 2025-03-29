export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    // Motion toolbox Category
    {
      kind: "category",
      name: "Motion",
      colour: "230",
      contents: [
        { kind: "block", type: "move_forward" },
        { kind: "block", type: "turn_right" },
        { kind: "block", type: "turn_left" },
        { kind: "block", type: "random_postion" },
        { kind: "block", type: "goto_position" },
        { kind: "block", type: "goto_X" },
        { kind: "block", type: "goto_Y" },
        { kind: "block", type: "glide_random" },
        { kind: "block", type: "glide_position" },
      ],
    },

    // Looks toolbox Category
    {
      kind: "category",
      name: "Looks",
      colour: "160",
      contents: [
        { kind: "block", type: "say_message_duration" },
        { kind: "block", type: "say_message" },
        { kind: "block", type: "think_message_duration" },
        { kind: "block", type: "think_message" },
        { kind: "block", type: "set_size" },
        { kind: "block", type: "show_sprite" },
        { kind: "block", type: "hide_sprite" },
      ],
    },

    // Sound toolbox Category
    {
      kind: "category",
      name: "Sound",
      colour: "300",
      contents: [
        { kind: "block", type: "play_sound" },
        { kind: "block", type: "set_volume" },
      ],
    },

    // Event toolbox Category
    {
      kind: "category",
      name: "Events",
      colour: "45",
      contents: [
        { kind: "block", type: "run_clicked" },
        { kind: "block", type: "key_pressed" },
        { kind: "block", type: "sprite_clicked" },
      ],
    },

    // Control toolbox Category
    {
      kind: "category",
      name: "Control",
      colour: "60",
      contents: [
        { kind: "block", type: "wait_time" },
        { kind: "block", type: "repeat_loop" },
        { kind: "block", type: "if_condition" },
        { kind: "block", type: "if_else_condition" },
        { kind: "block", type: "repeat_until" },
      ],
    },

    // Operator toolbox Category
    {
      kind: "category",
      name: "Operator",
      colour: "120",
      contents: [
        { kind: "block", type: "add_numbers" },
        { kind: "block", type: "subtract_numbers" },
        { kind: "block", type: "divide_numbers" },
        { kind: "block", type: "multiply_numbers" },
        { kind: "block", type: "less_than" },
        { kind: "block", type: "greater_than" },
        { kind: "block", type: "equal_to" },
      ],
    },

    //Variable toolbox Category
    {
      kind: "category",
      name: "Variables",
      colour: "330",
      contents: [
        { kind: "block", type: "set_variable" },
        { kind: "block", type: "use_variable" },
        { kind: "block", type: "internal_value" },
      ],
    },
  ],
};
