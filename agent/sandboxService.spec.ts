import { SandboxService } from './sandboxService';

const sandBoxService = new SandboxService();

const repoName = 'kkirik/my-mobx.git';
const command = 'ls';
const commitHash = '48d37d94a9599bc4f9608410758208cd86958c19';
const result = {
	message:
		'node_modules\npackage-lock.json\npackage.json\nsrc\ntsconfig.json\nwebpack.config.js\nyarn.lock\n',
};
test('Test run method to return result logs', () => {
	expect(sandBoxService.run(command, repoName, commitHash)).toBe(result);
});
