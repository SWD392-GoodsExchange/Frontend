export interface MemberResponse {
  FeID: string;
  RoleID: number;
  Username: string;
  Password: string;
  Dob: string;
  Address: string;
  Gender: string;
  Email: string;
  Phone: string;
  CreatedTime: string;
  Status: string;
}

export interface Member {
  feId: string;
  userName: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
  dob: Date;
}

export interface MemberInfor {
  feId: string;
  username: string;
  dob: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
}
