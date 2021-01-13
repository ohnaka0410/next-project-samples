import { useState, useCallback } from "react";

import {
  InputContainer,
  InputContainerWithMemo,
  InputWithMemoContainer,
  InputWithMemoContainerWithMemo,
} from "@/components/blocks/InputContainer";
import {
  LabelContainer,
  LabelContainerWithMemo,
  LabelWithMemoContainer,
  LabelWithMemoContainerWithMemo,
} from "@/components/blocks/LabelContainer";

type State = {
  firstName: string;
  lastName: string;
};

const defaultState: State = {
  firstName: "",
  lastName: "",
};

/**
 * Propsの型定義
 */
type Props = Readonly<{
  /*
   * Child Elements
   */
  children?: never;
}>;

/**
 * TextInput Component
 */
export const TextInput: React.FC<Props> = (_: Props): JSX.Element => {
  console.info("render: TextInput Component");
  const [state, setState] = useState<State>(defaultState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInput onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          firstName: event.target.value,
        };
      }
    );
  };
  const onChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInput onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          lastName: event.target.value,
        };
      }
    );
  };

  const fullName = `${state.firstName}${state.lastName}`;

  return (
    <>
      <section>
        <h2>InputContainer</h2>
        <InputContainer text={state.firstName} onChange={onChange} />
        <InputContainer text={state.lastName} onChange={onChange2} />
        <LabelContainer text={fullName} />
      </section>
    </>
  );
};

/**
 * TextInputWithElementMemo Component
 */
export const TextInputWithElementMemo: React.FC<Props> = (_: Props): JSX.Element => {
  console.info("render: TextInputWithElementMemo Component");
  const [state, setState] = useState<State>(defaultState);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInput onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          firstName: event.target.value,
        };
      }
    );
  }, []);
  const onChange2 = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInput onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          lastName: event.target.value,
        };
      }
    );
  }, []);

  const fullName = `${state.firstName}${state.lastName}`;

  return (
    <>
      <section>
        <h2>InputWithMemoContainer</h2>
        <InputWithMemoContainer text={state.firstName} onChange={onChange} />
        <InputWithMemoContainer text={state.lastName} onChange={onChange2} />
        <LabelWithMemoContainer text={fullName} />
      </section>
    </>
  );
};

/**
 * TextInputWithBlockMemo Component
 */
export const TextInputWithBlockMemo: React.FC<Props> = (_: Props): JSX.Element => {
  console.info("render: TextInputWithBlockMemo Component");
  const [state, setState] = useState<State>(defaultState);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInputWithBlockMemo onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          firstName: event.target.value,
        };
      }
    );
  }, []);
  const onChange2 = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInputWithBlockMemo onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          lastName: event.target.value,
        };
      }
    );
  }, []);

  const fullName = `${state.firstName}${state.lastName}`;

  return (
    <>
      <section>
        <h2>InputContainerWithMemo</h2>
        <InputContainerWithMemo text={state.firstName} onChange={onChange} />
        <InputContainerWithMemo text={state.lastName} onChange={onChange2} />
        <LabelContainerWithMemo text={fullName} />
      </section>
    </>
  );
};

/**
 * TextInputWithBlockMemoWithElementMemo Component
 */
export const TextInputWithBlockMemoWithElementMemo: React.FC<Props> = (_: Props): JSX.Element => {
  console.info("render: TextInputWithBlockMemoWithElementMemo Component");

  const [state, setState] = useState<State>(defaultState);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInputWithBlockMemoWithElementMemo onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          firstName: event.target.value,
        };
      }
    );
  }, []);
  const onChange2 = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    console.info("TextInputWithBlockMemoWithElementMemo onChange:");
    setState(
      (prevState: State): State => {
        console.info("setState");
        return {
          ...prevState,
          lastName: event.target.value,
        };
      }
    );
  }, []);

  const fullName = `${state.firstName}${state.lastName}`;

  return (
    <>
      <section>
        <h2>InputWithMemoContainerWithMemo</h2>
        <InputWithMemoContainerWithMemo text={state.firstName} onChange={onChange} />
        <InputWithMemoContainerWithMemo text={state.lastName} onChange={onChange2} />
        <LabelWithMemoContainerWithMemo text={fullName} />
      </section>
    </>
  );
};
