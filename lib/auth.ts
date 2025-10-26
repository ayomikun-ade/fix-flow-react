import { User, LoginCredentials, SignupCredentials } from "@/lib/types";

const SESSION_KEY = "ticketapp_session";

// Mock user database (in real app, this would be backend)
const MOCK_USERS_KEY = "ticketapp_users";

interface StoredUser extends User {
  password: string;
}

// Initialize with a demo user
const initializeMockUsers = () => {
  if (typeof window === 'undefined') return;

  const users = localStorage.getItem(MOCK_USERS_KEY);
  if (!users) {
    const demoUser: StoredUser = {
      id: "1",
      email: "test@example.com",
      name: "Test User",
      password: "test123",
    };
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify([demoUser]));
  }
};

const getMockUsers = (): StoredUser[] => {
  if (typeof window === 'undefined') return [];

  initializeMockUsers();
  const users = localStorage.getItem(MOCK_USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveMockUsers = (users: StoredUser[]) => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

export const login = async (
  credentials: LoginCredentials
): Promise<{ user: User; token: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const users = getMockUsers();
  const user = users.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const token = btoa(
    JSON.stringify({ userId: user.id, timestamp: Date.now() })
  );
  const userWithoutPassword: User = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  const session = { user: userWithoutPassword, token };

  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  return session;
};

export const signup = async (
  credentials: SignupCredentials
): Promise<{ user: User; token: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const users = getMockUsers();

  // Check if user already exists
  if (users.find((u) => u.email === credentials.email)) {
    throw new Error("User with this email already exists");
  }

  const newUser: StoredUser = {
    id: Date.now().toString(),
    email: credentials.email,
    name: credentials.name,
    password: credentials.password,
  };

  users.push(newUser);
  saveMockUsers(users);

  const token = btoa(
    JSON.stringify({ userId: newUser.id, timestamp: Date.now() })
  );
  const userWithoutPassword: User = {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
  };

  const session = { user: userWithoutPassword, token };

  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  return session;
};

export const logout = () => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(SESSION_KEY);
};

export const getSession = (): { user: User; token: string } | null => {
  if (typeof window === 'undefined') return null;

  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
};

export const isAuthenticated = (): boolean => {
  return getSession() !== null;
};
