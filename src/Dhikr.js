import React from "react";
import { useState } from "react";
import { NumericStepper } from '@anatoliygatt/numeric-stepper';
import './Dhikr.css';

const Dhikr = () => {

    const INITIAL_VALUE = 0;
  const [value, setValue] = useState(INITIAL_VALUE);

    return (
        <div className="Counter">
            <NumericStepper
      minimumValue={0}
      maximumValue={1000}
      stepValue={1}
      initialValue={INITIAL_VALUE}
      size="md"
      inactiveTrackColor="#42413b"
      activeTrackColor="#ffc635"
      activeButtonColor="#ffc635"
      inactiveIconColor="#ffc635"
      hoverIconColor="#ffc635"
      activeIconColor="#ffc635"
      disabledIconColor="#ffc635"
      thumbColor="#ffc635"
      thumbShadowAnimationOnTrackHoverEnabled={false}
      focusRingColor="#ffc635"
      onChange={(value) => {
        setValue(value);
      }}
    />
    <h1 className="dhikrTitle"> Ayahmatch Dhikr Counter</h1>
        </div>
    );
}

export default Dhikr;