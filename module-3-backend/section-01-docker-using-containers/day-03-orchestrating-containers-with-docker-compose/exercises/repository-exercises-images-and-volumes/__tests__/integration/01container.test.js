const { readCommand, resultOutput } = require('../util');
const { requirements } = require('../../.trybe/requirements.json');
const { resultCriteria } = require('../constants');

let resultHeader= {
  containerName: "site-trybe",
  containerID: "",
  imageName: "httpd",
  imageTag: "2.4",
};

describe(requirements[0].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command01.dc'", async () => {
    const { stdout: result } = await readCommand(1);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toHaveLength(64);

    resultHeader.containerID = result;

    const { stdout: commandValidation } = await
      readCommand(false, `docker inspect --format="${resultCriteria}" ${resultHeader.containerID}`, false);
    expect(commandValidation)
      .toStrictEqual(
        resultOutput({
          ...resultHeader,
          stateStatus: "running",
          stateRunning: true,
          hostConfigPortBindings: "map[80/tcp:[map[HostIp: HostPort:4545]]]"
        })
      ); 
      const { stdout: isInteractive } = await
      readCommand(false, `docker inspect --format="{{(index .Config.OpenStdin)}};" ${resultHeader.containerID}`, false);
    expect(isInteractive).toContain('false');
  });
});

describe(requirements[1].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command02.dc'", async () => {
    const { stdout: result } = await readCommand(2);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('CONTAINER ID');
    expect(result).toContain('httpd-foreground');
    expect(result).toContain('site-trybe');
    
  });
});

describe(requirements[2].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command03.dc'", async () => {
    const { stdout: result } = await readCommand(3);
    expect(result).not.toBeNull();
    expect(result).toContain('Mounts');
    expect(result).toContain('Source');
    expect(result).toContain('/usr/local/apache2/htdocs');
    
  });
});

describe(requirements[3].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command04.dc'", async () => {
    const { stdout: result } = await readCommand(4);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('site-trybe');
    
    const { stdout: containerCounter } = await readCommand(false, 'docker ps -q --filter "status=exited" | wc -l', false);
    expect(containerCounter).toStrictEqual('1');
  });
});


describe(requirements[4].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command05.dc'", async () => {
    const { stdout: result } = await readCommand(5);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('site-trybe');

    const { stdout: containerCounter } = await readCommand(false, 'docker ps -q --filter "status=exited" | wc -l', false);
    expect(containerCounter).toStrictEqual('0');
  });
});

describe(requirements[5].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command06.dc'", async () => {
    const { stdout: result } = await readCommand(6);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('httpd');
    expect(result).toContain('IMAGE ID');

    const { stdout: containerCounter } = await readCommand(false, 'docker ps -aq | wc -l', false);
    expect(containerCounter).toStrictEqual('0');
  });
});

describe(requirements[6].description, () => {
  it("O avaliador deve executar o comando no arquivo 'command07.dc'", async () => {
    const { stdout: result } = await readCommand(7);
    expect(result).not.toBeNull();
    expect(result).not.toContain('Error');

    expect(result).toContain('Untagged');
    expect(result).toContain('httpd');

    const { stdout: imageCounter } = await readCommand(false, 'docker images | wc -l', false);
    expect(imageCounter).toStrictEqual('1');
  });
});