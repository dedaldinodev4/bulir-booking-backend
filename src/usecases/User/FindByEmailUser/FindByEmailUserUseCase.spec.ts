
import { FindByEmailUserUseCase } from "./FindByEmailUserUseCase";
import { 
  InMemoryUserRepository 
} from "../../../repositories/implementations/in-memory/InMemoryUserRepository"
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { IUserCostum } from "../../../dtos/User";
import { userMock } from "../../../mocks/user";

describe("Find an user usecase", () => {

  let inMemoryUserRepository: InMemoryUserRepository;
  let findByEmailUserUseCase: FindByEmailUserUseCase;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    findByEmailUserUseCase = new FindByEmailUserUseCase(inMemoryUserRepository)
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })

  it("Should be able to find email user", async () => {
    
    const result = await createUserUseCase.execute(userMock)
    const { email } = (result as IUserCostum)

    await expect(findByEmailUserUseCase.execute(email)
    ).resolves
    .not
    .toThrow()
  })

});