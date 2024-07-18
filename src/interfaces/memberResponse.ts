export interface MemberResponse {
  feId: string;
  roleId: number;
  username: string;
  password: string;
  dob: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
  createdTime: string;
  status: string;
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
