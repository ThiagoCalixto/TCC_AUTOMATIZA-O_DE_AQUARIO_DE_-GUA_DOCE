export type TransferNavigationProps = {
  id?: string;
};

export type ContactNavigationProps = {
  id?: string;
};

export type StatementNavigationProps = {
  id?: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamsList {
      home: undefined;
      transferAmount: undefined;
      transferRecipient: TransferNavigationProps;
      transferGenerated: TransferNavigationProps;
      transferLoading: TransferNavigationProps;
      transferNewRecipient: undefined;
      contacts: undefined;
      contact: ContactNavigationProps;
      statements: undefined;
      statement: StatementNavigationProps;
    }
  }
}
