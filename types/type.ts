export type userTableCardType = {
  id: string | undefined | null;
  organization: string | undefined | null;
  username: string | undefined | null;
  email: string | undefined | null;
  phoneNumber: string | undefined | null;
  dateJoined: string | undefined | null;
  status: string | undefined | null;
};

export type TabListType = Array<{
  name: string | undefined | null;
  activeTab?: string | undefined | null;
}>;
