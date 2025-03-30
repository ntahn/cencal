import { Contact } from "./Contact";

import styles from "./ClientInfo.module.scss";

type ClientInfoProps = {
  currentStep?: number;
};

export const ClientInfo = ({}: ClientInfoProps) => {
  return (
    <div className={styles.container}>
      <Contact />
    </div>
  );
};
