import {travis, tap} from '@travis/workers'

getTravisBuildId(id: number): Observable<Build>{
	return this.http.get<Build>(`/GET/accounts/${id}`)
	.pipe(
	map(b => <Build>{
		buildId: b.Id,
		buildTime: b.buildTime
	}),
	tap(buildInfo => console.log(TravisBuildId))
	);
